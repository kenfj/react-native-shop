import { P, S } from 'components/tamagui/styled';
import { Order } from 'models/Order';
import { OrderItem } from 'models/OrderItem';
import { Card, ListItem, XStack } from 'tamagui';

type OrderCardProps = {
  order: Order;
  orderItems: OrderItem[];
};

export const OrderCard = ({ order, orderItems }: OrderCardProps) => (
  <Card>
    <P>
      Email: {order.email} / Total: {order.total}
    </P>

    {orderItems
      .filter((item) => item.order_id === order.id)
      .map((item) => (
        <ListItem bordered marginBottom={1} key={item.id}>
          <XStack space style={{ width: '100%' }}>
            <S>受注ID: {item.order_id}</S>
            <S>商品ID: {item.product_id}</S>
            <S>{item.product_price}円</S>
            <S>{item.quantity}個</S>
            <S theme="alt2">{item.total}円</S>
          </XStack>
        </ListItem>
      ))}
  </Card>
);
