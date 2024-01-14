import { HandPointerIcon } from 'components/icons/miscIcon';
import { S } from 'components/tamagui/styled';
import { Shop } from 'models/Shop';
import { Button, Card, XStack, YStack } from 'tamagui';

export const ShopCard = ({ shop }: { shop: Shop }) => (
  <Card bordered padded marginBottom={5}>
    <YStack>
      <S size="$6" width={250} ellipse>
        {shop.shop_name}
      </S>
      <XStack space style={{ width: '100%' }}>
        <S size="$5" theme="alt2" width={250} ellipse numberOfLines={2}>
          {shop.shop_description}
        </S>
        <Button borderRadius="$10" bg="pink" marginLeft="auto">
          <HandPointerIcon size={26} />
        </Button>
      </XStack>
    </YStack>
  </Card>
);
