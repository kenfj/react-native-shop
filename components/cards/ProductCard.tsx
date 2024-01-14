import { HandPointerIcon } from 'components/icons/miscIcon';
import { S } from 'components/tamagui/styled';
import { Product } from 'models/Product';
import { Shop } from 'models/Shop';
import { Button, Card, Image, XStack, YStack } from 'tamagui';

const imageWidth = { width: 60, height: 60 };

type ProductCardProps = {
  shop: Shop;
  product: Product;
  quantity?: number;
};

export const ProductCard = ({ shop, product, quantity }: ProductCardProps) => (
  <Card bordered padded marginBottom={5}>
    <YStack>
      <XStack>
        {shop && (
          <S size="$3" width={80} ellipse>
            {shop.shop_name}
          </S>
        )}
        <S size="$6" width={250} ellipse>
          {product.product_name}
        </S>
      </XStack>
      <XStack space style={{ width: '100%' }}>
        <Image source={{ uri: product.product_image, ...imageWidth }} />

        <S size="$5" theme="alt2" width={250} ellipse numberOfLines={2}>
          {product.product_description}
        </S>
        <Button borderRadius="$10" bg="pink" marginLeft="auto">
          <HandPointerIcon size={26} />
        </Button>
      </XStack>
      <S size="$5" width={250}>
        {product.product_price}円{' '}
        {quantity ? `${quantity}個 計${product.product_price * quantity}円` : ''}
      </S>
    </YStack>
  </Card>
);
