import { ProductCard } from 'components/cards/ProductCard';
import { ShopCard } from 'components/cards/ShopCard';
import { Container, Hr, P } from 'components/tamagui/styled';
import { Link } from 'expo-router';
import { findAll } from 'lib/api';
import { Product } from 'models/Product';
import { Shop } from 'models/Shop';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { H3, Theme } from 'tamagui';

export default function TabOneScreen() {
  const [shops, setShops] = useState<Shop[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const shops = await findAll<Shop>('shops');
      setShops(shops);
      const products = await findAll<Product>('products');
      setProducts(products);
    };
    fetchProduct();
  }, []);

  return (
    <Theme name="light">
      <Container>
        <H3 mb={10}>人気順</H3>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <Link href={`/shops/products/${item.id}`} style={{ height: 150 }}>
              <ProductCard shop={shops.find((s) => s.id === item.id)!} product={item} />
            </Link>
          )}
          keyExtractor={(item) => `${item.id}`}
          style={{ width: '100%' }}
          ListEmptyComponent={<P>データが見つかりません。</P>}
        />

        <Hr />

        <H3 mb={10}>以前注文したお店</H3>
        <FlatList
          data={shops}
          renderItem={({ item }) => (
            <Link href={`/shops/${item.id}`} style={{ height: 100 }}>
              <ShopCard shop={item} />
            </Link>
          )}
          keyExtractor={(item) => `${item.id}`}
          style={{ width: '100%' }}
          initialNumToRender={5}
          ListEmptyComponent={<P>データが見つかりません。</P>}
        />
      </Container>
    </Theme>
  );
}
