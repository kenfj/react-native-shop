import { FontAwesome5 } from '@expo/vector-icons';

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

export const HomeIcon = (props: TabBarIconProps) => {
  return <FontAwesome5 name="home" {...props} />;
};

export const SearchIcon = (props: TabBarIconProps) => {
  return <FontAwesome5 name="search" {...props} />;
};

export const CartIcon = (props: TabBarIconProps) => {
  return <FontAwesome5 name="shopping-cart" {...props} />;
};

export const UserIcon = (props: TabBarIconProps) => {
  return <FontAwesome5 name="user" {...props} />;
};
