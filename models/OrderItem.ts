export type OrderItem = {
  id: number;
  order_id: number;
  shop_id: number;
  product_id: number;
  product_name: string;
  product_price: number;
  quantity: number;
  total: number;
};

export type OrderItemToInsert = Omit<OrderItem, 'id'>;
