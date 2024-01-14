import { MinusIcon, PlusIcon } from 'components/icons/cartIcons';
import { S } from 'components/tamagui/styled';
import { Product } from 'models/Product';
import { Shop } from 'models/Shop';
import { Button, Card, Image, XStack, YStack } from 'tamagui';

const imageWidth = { width: 50, height: 50 };

type CartItemCardProps = {
  shop?: Shop;
  product: Product;
  quantity: number;
  addProduct: (product: Product) => void;
  reduceProduct: (product: Product) => void;
};

export const CartItemCard = ({
  shop,
  product,
  quantity,
  addProduct,
  reduceProduct,
}: CartItemCardProps) => (
  <Card bordered padded marginBottom={5}>
    <YStack>
      <XStack>
        {shop && (
          <S size="$3" width={80} ellipse>
            {shop?.shop_name}
          </S>
        )}
        <S size="$6" width={250} ellipse>
          {product.product_name}
        </S>
      </XStack>
      <XStack space style={{ width: '100%' }}>
        <Image source={{ uri: product?.product_image, ...imageWidth }} />

        <YStack>
          <S>
            {product.product_price}円 {quantity}個
          </S>
          <S>計{(product.product_price * quantity).toFixed(2)}円</S>
        </YStack>

        <XStack marginLeft="auto">
          <Button onPress={() => product && reduceProduct(product)}>
            <MinusIcon size={26} />
          </Button>
          <S size="$6">{quantity}個</S>
          <Button onPress={() => product && addProduct(product)}>
            <PlusIcon size={26} />
          </Button>
        </XStack>
      </XStack>
    </YStack>
  </Card>
);
