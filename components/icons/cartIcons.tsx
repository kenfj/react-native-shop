import { FontAwesome5 } from '@expo/vector-icons';

type CardIconProps = {
  size: number;
};

export const MinusIcon = (props: CardIconProps) => {
  return <FontAwesome5 name="minus-square" size={props.size} />;
};

export const PlusIcon = (props: CardIconProps) => {
  return <FontAwesome5 name="plus-square" size={props.size} />;
};

export const OrderDoneIcon = (props: CardIconProps) => {
  return <FontAwesome5 name="check-circle" size={props.size} color="green" />;
};
