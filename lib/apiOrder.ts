import { Order, OrderToInsert } from 'models/Order';
import { OrderItem, OrderItemToInsert } from 'models/OrderItem';
import { CartProduct } from 'models/Product';

import { insert } from './api';

export type CreateOrderRequest = {
  email: string;
  cartProducts: CartProduct[];
};

export type CreateOrderResponse = {
  order: Order;
  orderItems: OrderItem[];
};

export const createOrder = async ({ email, cartProducts }: CreateOrderRequest) => {
  ensureProductsExists(cartProducts);
  ensureSingleShop(cartProducts);

  const newOrder = buildOrder(email, cartProducts);
  const res = await insert<Order>('orders', [newOrder]);

  if (res.error) {
    console.error('Failed to insert order', res);
    throw new Error(`[${res.status}] ${res.error.code}: ${res.error.message}`);
  }

  const order = (res.data as Order[])[0];

  const newOrderItems = buildOrderItems(order.id, cartProducts);
  const res2 = await insert<OrderItem>('order_items', newOrderItems);

  if (res2.error) {
    console.error('Failed to insert order items', res2);
    throw new Error(`${res2.error}`);
  }

  const orderItems = res2.data as OrderItem[];

  return { order, orderItems } as CreateOrderResponse;
};

const ensureProductsExists = (cartProducts: CartProduct[]) => {
  if (cartProducts.length === 0) {
    console.info('CartProductEmptyError');
    throw new Error('商品がありません。');
  }
};

const ensureSingleShop = (products: CartProduct[]) => {
  const shopIds = products.map((_) => _.shop_id);
  const shopIdSet = new Set(shopIds);

  if (shopIdSet.size > 1) {
    console.info(`MultiShopsError: ${shopIds}`);
    throw new Error(`複数店舗同時購入できません: ${shopIds}`);
  }
};

const buildOrder = (email: string, cartProducts: CartProduct[]): OrderToInsert => {
  const total = cartProducts
    .map((_) => _.product_price * _.quantity)
    .reduce((sum, current) => sum + current, 0);

  return {
    email,
    shop_id: cartProducts[0].shop_id,
    order_date: new Date().toLocaleString(),
    total,
  };
};

const buildOrderItems = (orderId: number, cartProducts: CartProduct[]): OrderItemToInsert[] => {
  return cartProducts.map((p) => ({
    order_id: orderId,
    shop_id: p.shop_id,
    product_id: p.id,
    product_name: p.product_name,
    product_price: p.product_price,
    quantity: p.quantity,
    total: p.product_price * p.quantity,
  }));
};
