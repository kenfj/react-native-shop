import { HeaderBackButton } from '@react-navigation/elements';
import { Router } from 'expo-router';
import { Shop } from 'models/Shop';

// add HeaderBackButton manually
// https://stackoverflow.com/questions/68938861

export const BackButton = (router: Router, shop: Shop | undefined = undefined) => {
  const label = shop === undefined ? 'お店リストへ' : shop.shop_name;

  const onPress = () =>
    shop === undefined
      ? router.replace('/(tabs)/shops')
      : router.replace(`/(tabs)/shops/${shop.id}`);

  return <HeaderBackButton label={label} onPress={onPress} />;
};
