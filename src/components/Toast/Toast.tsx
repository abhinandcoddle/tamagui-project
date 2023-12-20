import {Toast, useToastController, useToastState} from '@tamagui/toast';
import React from 'react';
import Button from '../Button/Button';
import {XStack, YStack} from 'tamagui';
import {styles} from '../../themeConfig/GlobalStyles';
/**
 *  IMPORTANT NOTE: if you're copy-pasting this demo into your code, make sure to add:
 *    - <ToastProvider> at the root
 *    - <ToastViewport /> where you want to show the toasts
 */

export const Toasts = () => {
  return (
    <YStack space alignItems="center">
      <ToastControl native={false} />
      <CurrentToast />
    </YStack>
  );
};
const CurrentToast = () => {
  const currentToast = useToastState();
  if (!currentToast || currentToast.isHandledNatively) return null;

  return (
    <Toast
      key={currentToast.id}
      duration={currentToast.duration}
      enterStyle={{opacity: 0, scale: 0.5, y: -25}}
      exitStyle={{opacity: 0, scale: 1, y: -20}}
      y={0}
      opacity={1}
      scale={1}
      animation="100ms"
      viewportName={currentToast.viewportName}>
      <YStack>
        <Toast.Title>{currentToast.title}</Toast.Title>

        {!!currentToast.message && (
          <Toast.Description>{currentToast.message}</Toast.Description>
        )}
      </YStack>
    </Toast>
  );
};
const ToastControl = ({native}: {native: boolean}) => {
  const toast = useToastController();

  return (
    <XStack space="$2" justifyContent="center">
      <Button
        label="Show Toast"
        color="white"
        size={16}
        bgColor="#393ecc"
        onClick={() => {
          toast.show('Successfully saved!', {
            message: "Don't worry, we've got your data.",
            native,
          });
        }}
        style={styles.primaryButton}
      />
    </XStack>
  );
};
