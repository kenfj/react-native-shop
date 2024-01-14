import { OrderCard } from 'components/cards/OrderCard';
import { Container, Hr, P } from 'components/tamagui/styled';
import { useFocusEffect } from 'expo-router';
import { findAll, findAllInColumn } from 'lib/api';
import { Order } from 'models/Order';
import { OrderItem } from 'models/OrderItem';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { H3, Theme, YStack } from 'tamagui';

export default function ProfileScreen() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  useFocusEffect(() => {
    (async () => {
      const orders = await findAll<Order>('orders');
      orders.sort((a, b) => (a.id > b.id ? -1 : 1));
      setOrders(orders);

      const orderIds = orders.map((order) => order.id);
      const items = await findAllInColumn<OrderItem>('order_items', 'order_id', orderIds);
      setOrderItems(items);
    })();
  });

  return (
    <Theme name="light">
      <Container>
        <H3 mb={10}>登録情報</H3>
        <P>ユーザー名: foo</P>
        <P>Email: foo@example.com</P>

        <Hr />

        <H3 mb={10}>注文履歴</H3>

        {orders.length === 0 && <P>注文履歴はありません。</P>}

        <YStack>
          <FlatList
            data={orders}
            renderItem={({ item }) => <OrderCard order={item} orderItems={orderItems} />}
            keyExtractor={(item) => `${item.id}`}
            style={{ width: '100%' }}
            initialNumToRender={5}
          />
        </YStack>
      </Container>
    </Theme>
  );
}
