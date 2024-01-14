import { BackButton } from 'components/buttons/BackButton';
import { ProductCard } from 'components/cards/ProductCard';
import { Container, P, S } from 'components/tamagui/styled';
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { findAllByColumn, findById } from 'lib/api';
import { Product } from 'models/Product';
import { Shop } from 'models/Shop';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { H5, Theme } from 'tamagui';

const ShopPage = () => {
  const router = useRouter();
  const { sid } = useLocalSearchParams<{ sid: string }>();

  const [shop, setShop] = useState<Shop>();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const shop = await findById<Shop>('shops', sid);
      setShop(shop);
      const products = await findAllByColumn<Product>('products', 'shop_id', `${shop?.id}`);
      setProducts(products);
    })();
  }, []);

  return (
    <Theme name="light">
      <Container>
        <Stack.Screen
          options={{
            headerTitle: shop?.shop_name,
            headerLeft: (props) => (props.canGoBack ? null : BackButton(router)),
          }}
        />

        <H5 mb={15}>商品リスト</H5>

        {shop === undefined ? (
          <S>お店が見つかりません。</S>
        ) : (
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <Link href={`/shops/products/${item.id}`} style={{ height: 150 }}>
                <ProductCard shop={shop} product={item} />
              </Link>
            )}
            keyExtractor={(item) => `${item.id}`}
            style={{ width: '100%' }}
            initialNumToRender={5}
            ListEmptyComponent={<P>データが見つかりません。</P>}
          />
        )}
      </Container>
    </Theme>
  );
};

export default ShopPage;
