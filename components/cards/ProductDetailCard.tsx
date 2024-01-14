import { MinusIcon, PlusIcon } from 'components/icons/cartIcons';
import { P, S } from 'components/tamagui/styled';
import { Product } from 'models/Product';
import { Shop } from 'models/Shop';
import { Button, Card, H5, Image, XStack } from 'tamagui';

export const imageWidth = { width: 200, height: 200 };

export type ProductDetailCardProps = {
  shop: Shop;
  product: Product;
  count: number;
  addProduct: (product: Product) => void;
  reduceProduct: (product: Product) => void;
};

export const ProductDetailCard = ({
  shop,
  product,
  count,
  addProduct,
  reduceProduct,
}: ProductDetailCardProps) => {
  return (
    <Card bordered padded alignItems="center">
      <P>{shop.shop_name}</P>
      <H5>{product.product_name}</H5>

      <S size="$5" theme="alt2" width={250} m={20}>
        {product.product_description}
      </S>

      <P m={20}>価格: {product.product_price}円</P>

      <Image source={{ uri: product.product_image, ...imageWidth }} />

      <XStack mt={20}>
        <Button onPress={() => product && reduceProduct(product)}>
          <MinusIcon size={35} />
        </Button>
        <S m={15}>
          {count}個 {(product.product_price * count).toFixed(2)}円
        </S>
        <Button onPress={() => product && addProduct(product)}>
          <PlusIcon size={35} />
        </Button>
      </XStack>
    </Card>
  );
};
