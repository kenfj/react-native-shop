export type Order = {
  id: number;
  shop_id: number;
  order_date: string;
  email: string;
  total: number;
};

export type OrderToInsert = Omit<Order, 'id'>;
