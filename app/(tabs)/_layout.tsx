import { InfoIcon } from 'components/icons/miscIcon';
import { CartIcon, HomeIcon, SearchIcon, UserIcon } from 'components/icons/tabIcons';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

const InfoLink = () => (
  <Link href="/modal" asChild>
    <Pressable>{InfoIcon}</Pressable>
  </Link>
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerStyle: {
          backgroundColor: 'lightgreen',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'HOME',
          tabBarIcon: HomeIcon,
          headerRight: InfoLink,
        }}
      />
      <Tabs.Screen
        name="shops"
        options={{
          title: '探す',
          tabBarIcon: SearchIcon,
          headerRight: InfoLink,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'お会計',
          tabBarIcon: CartIcon,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'ユーザー情報',
          tabBarIcon: UserIcon,
        }}
      />
    </Tabs>
  );
}
