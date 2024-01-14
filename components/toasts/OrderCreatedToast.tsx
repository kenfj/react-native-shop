import { OrderDoneIcon } from 'components/icons/cartIcons';
import { P } from 'components/tamagui/styled';
import { Order } from 'models/Order';
import Toast from 'react-native-root-toast';
import { H5, YStack } from 'tamagui';

type OrderCreatedToastProps = {
  order: Order | undefined;
};

export const OrderCreatedToast = ({ order }: OrderCreatedToastProps) => {
  return (
    <Toast visible={order !== undefined} position={Toast.positions.TOP} delay={100} opacity={0.8}>
      <YStack width={200}>
        <H5>
          <OrderDoneIcon size={28} />
          注文完了
        </H5>
        <P>注文番号: {order?.id}</P>
      </YStack>
    </Toast>
  );
};
