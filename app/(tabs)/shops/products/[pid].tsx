import { BackButton } from 'components/buttons/BackButton';
import { ProductDetailCard } from 'components/cards/ProductDetailCard';
import { AddCartDialog } from 'components/dialogs/AddCartDialog';
import { Container, S } from 'components/tamagui/styled';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { findById } from 'lib/api';
import { useCartStore } from 'lib/cartStore';
import { Product } from 'models/Product';
import { Shop } from 'models/Shop';
import { useCallback, useEffect, useState } from 'react';
import { Theme } from 'tamagui';

const ProductDetailPage = () => {
  const router = useRouter();
  const { pid } = useLocalSearchParams<{ pid: string }>();

  const [shop, setShop] = useState<Shop>();
  const [product, setProduct] = useState<Product>();

  const { cartProducts, addProduct, reduceProduct } = useCartStore((state) => ({ ...state }));
  const [count, setCount] = useState(0);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await findById<Product>('products', pid);
      setProduct(product);
      const shop = await findById<Shop>('shops', `${product?.shop_id}`);
      setShop(shop);
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    const cartProduct = cartProducts.find((product) => `${product.id}` === pid);
    setCount(cartProduct?.quantity ?? 0);
  }, [cartProducts]);

  const tryAddProduct = useCallback((product: Product) => {
    try {
      addProduct(product);
    } catch (err: unknown) {
      if (err instanceof Error && err.message === 'ShopIdDiffer') {
        setOpen(true);
      } else {
        alert(`Add Cart Error: ${err}`);
      }
    }
  }, []);

  return (
    <Theme name="light">
      <Container>
        <Stack.Screen
          options={{
            headerTitle: product?.product_name,
            headerLeft: (props) => (props.canGoBack ? null : BackButton(router, shop)),
          }}
        />

        {product === undefined || shop === undefined ? (
          <S>商品が見つかりませんでした。</S>
        ) : (
          <ProductDetailCard
            shop={shop}
            product={product}
            count={count}
            addProduct={tryAddProduct}
            reduceProduct={reduceProduct}
          />
        )}

        <AddCartDialog open={open} setOpen={setOpen} />
      </Container>
    </Theme>
  );
};

export default ProductDetailPage;
