import { InfoIcon } from 'components/icons/miscIcon';
import { S } from 'components/tamagui/styled';
import { Dispatch, SetStateAction } from 'react';
import { Button, Dialog, H5 } from 'tamagui';

export type AddCartDialogProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const AddCartDialog = ({ open, setOpen }: AddCartDialogProps) => {
  return (
    <Dialog
      modal
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
      }}>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Content key="content">
          <Dialog.Title>
            <H5>
              <InfoIcon pressed={false} />
              カート内には別のお店の商品が入っています
            </H5>
          </Dialog.Title>
          <Dialog.Description>
            <S>他店の商品と同時に購入はできません。</S>
            <S>カート内の商品を削除してください。</S>
          </Dialog.Description>
          <Dialog.Close>
            <Button onPress={() => setOpen(false)}>Close</Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
};
