import { Order, OrderToInsert } from 'models/Order';
import { OrderItem, OrderItemToInsert } from 'models/OrderItem';

import { insert } from './api';

export const insertOrder = async (
  order: OrderToInsert,
  orderItems: OrderItemToInsert[]
): Promise<{
  order: Order;
  orderItems: OrderItem[];
}> => {
  const shopIds = orderItems.map((item) => item.shop_id);
  const hasMultiShops = new Set(shopIds).size > 1;

  if (hasMultiShops) {
    console.info(`MultiShopsError: ${shopIds}`);
    throw new Error(`複数店舗エラー: ${shopIds}`);
  }

  const res = await insert<Order>('orders', [order]);

  if (res.error) {
    console.error('Failed to insert order', res);
    throw new Error(`[${res.status}] ${res.error.code}: ${res.error.message}`);
  }

  const order_id = (res.data as Order[])[0].id;
  const items = orderItems.map((item) => ({ ...item, order_id }));

  const res2 = await insert<OrderItem>('order_items', items);

  if (res2.error) {
    console.error('Failed to insert order items', res2);
    throw new Error(`${res.error}`);
  }

  return { order: res.data[0], orderItems: res2.data };
};
