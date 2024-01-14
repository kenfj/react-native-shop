import { Stack } from 'expo-router';

const ShopsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'お店リスト',
          headerShown: true,
        }}
      />
    </Stack>
  );
};

export default ShopsLayout;
