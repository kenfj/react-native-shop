import { Paragraph, Separator, SizableText, YStack, styled } from 'tamagui';

export const S = styled(SizableText, {});

export const P = styled(Paragraph, {});

export const Container = styled(YStack, {
  flex: 1,
  padding: 24,
  alignItems: 'center',
  backgroundColor: 'beige',
});

export const Hr = styled(Separator, {
  borderColor: 'green',
  borderWidth: 2,
  margin: 24,
  width: '100%',
  opacity: 0.2,
});
