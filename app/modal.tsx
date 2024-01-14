import { InfoIcon } from 'components/icons/miscIcon';
import { Container, Hr, P } from 'components/tamagui/styled';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { Theme, H3 } from 'tamagui';

export default function ModalScreen() {
  return (
    <Theme name="light">
      <Container>
        <Stack.Screen options={{ headerTitle: `ご案内` }} />

        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        <H3 p={5}>
          <InfoIcon pressed={false} />
          本アプリについて
        </H3>
        <Hr />
        <P>利用方法云々。</P>
      </Container>
    </Theme>
  );
}
