import { FontAwesome5 } from '@expo/vector-icons';

export const InfoIcon = ({ pressed }: { pressed: boolean }) => {
  return (
    <FontAwesome5
      name="info-circle"
      size={28}
      color="darkolivegreen"
      style={{ opacity: pressed ? 0.5 : 1, marginRight: 15 }}
    />
  );
};

export const HandPointerIcon = (props: { size: number }) => {
  return <FontAwesome5 name="hand-pointer" size={props.size} />;
};
