import { CartItemCard } from 'components/cards/CartItemCard';
import { Container, Hr, P, S } from 'components/tamagui/styled';
import { OrderCreatedToast } from 'components/toasts/OrderCreatedToast';
import { Link } from 'expo-router';
import { findAll } from 'lib/api';
import { createOrder } from 'lib/apiOrder';
import { useCartStore } from 'lib/cartStore';
import { Order } from 'models/Order';
import { Shop } from 'models/Shop';
import { useEffect, useState } from 'react';
import { FlatList, Keyboard } from 'react-native';
import { Button, H5, Input, Theme, XStack } from 'tamagui';

export default function CartScreen() {
  const [shops, setShops] = useState<Shop[]>([]);
  const [email, setEmail] = useState('');
  const [order, setOrder] = useState<Order>();
  const [submitting, setSubmitting] = useState(false);
  const { cartProducts, total, addProduct, reduceProduct, clearCart } = useCartStore((state) => ({
    ...state,
  }));

  useEffect(() => {
    (async () => {
      const shops = await findAll<Shop>('shops');
      setShops(shops);
    })();
  }, []);

  const onSubmitOrder = async () => {
    setSubmitting(true);
    Keyboard.dismiss();

    if (cartProducts.length === 0) return;

    try {
      const res = await createOrder({ email, cartProducts });
      setOrder(res.order);
      clearCart();

      setTimeout(function hideToast() {
        setOrder(undefined);
      }, 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Theme name="light">
      <Container>
        <OrderCreatedToast order={order} />

        <H5 mb={20}>選択した商品</H5>

        <FlatList
          data={cartProducts}
          renderItem={({ item }) => {
            const shop = shops.find((shop) => shop.id === item.shop_id);
            return (
              <Link href={`/shops/products/${item.id}`} style={{ height: 150 }}>
                <CartItemCard
                  shop={shop}
                  product={item}
                  quantity={item.quantity}
                  addProduct={addProduct}
                  reduceProduct={reduceProduct}
                />
              </Link>
            );
          }}
          keyExtractor={(item) => `${item.id}`}
          style={{ width: '100%' }}
          initialNumToRender={5}
          ListEmptyComponent={<P>商品が選択されていません。</P>}
        />
        <Hr />

        <S>合計額: {total().toFixed(2)}円</S>
        <Hr />

        <XStack>
          <S>Email: </S>
          <Input width={200} onChangeText={setEmail} autoCapitalize="none" />
        </XStack>

        <Button
          bg="pink"
          style={{ opacity: cartProducts.length === 0 || email === '' ? 0.5 : 1 }}
          disabled={cartProducts.length === 0 || email === '' || submitting}
          onPress={() => {
            onSubmitOrder();
          }}>
          {submitting ? '処理中...' : '注文する'}
        </Button>
      </Container>
    </Theme>
  );
}
