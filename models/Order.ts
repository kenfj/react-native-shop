export type Order = {
  id: number;
  shop_id: number;
  customer_email: string;
  total: number;
};

export type OrderToInsert = Omit<Order, 'id'>;
