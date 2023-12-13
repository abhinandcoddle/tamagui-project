import React, {useState, useEffect} from 'react';
import {
  Image,
  TamaguiProvider,
  XStack,
  YStack,
  Form,
  Spinner,
  Label,
  Switch,
  Checkbox,
  Text,
  Sheet,
  RadioGroup,
} from 'tamagui';
import config from './tamagui.config';
import {
  Container,
  HeaderText,
  InputText,
  SubContainer,
  SubmitButton,
  styles,
} from './GlobalStyles';
import {SafeAreaView, StatusBar} from 'react-native';

export default function App() {
  const Logo = require('./assets/images/background.png');
  const [checked, setChecked] = useState(false);
  const [ticked, setTicked] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>(
    'off',
  );

  useEffect(() => {
    if (status === 'submitting') {
      const timer = setTimeout(() => setStatus('off'), 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);

  return (
    <TamaguiProvider config={config}>
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor={'transparent'}
        />

        <Container automaticallyAdjustKeyboardInsets>
          <SubContainer>
            <Image source={Logo} width={120} height={50} jc="center" />
          </SubContainer>

          <YStack fd="column" jc="center" mt={15}>
            <HeaderText size="md" fontWeight="bold" ta="center">
              Let's get started 😌
            </HeaderText>

            <HeaderText size="xsm" mt={5} mb={35} color="$color.gray9Dark">
              Sign up into the family & get started immedietely
            </HeaderText>

            <Form ai="center" onSubmit={() => setStatus('submitting')}>
              <InputText placeholder="Full name" />
              <InputText placeholder="Email" />
              <InputText placeholder="Password" />

              <XStack
                ai="center"
                width="90%"
                pl="$3"
                borderColor="lightgrey"
                borderRadius="$3"
                onPress={() => setOpen(true)}
                borderWidth={1}>
                <Label
                  size="$5"
                  fontWeight="bold"
                  color="$color.gray9Dark"
                  onPress={() => setOpen(true)}
                  mr="$2">
                  Gender
                </Label>
                <Text
                  fontSize={16}
                  rotate="-90deg"
                  opacity={0.5}
                  $platform-android={{marginTop: 3}}>
                  ❮
                </Text>
              </XStack>

              <XStack ai="center" width="90%" mt="$2.5">
                <Label
                  htmlFor="notify"
                  fontSize={16}
                  fontWeight="bold"
                  mr={5}
                  color="$color.gray9Dark">
                  Allow Notifications
                </Label>
                <Switch
                  id="notify"
                  size="$1.5"
                  onCheckedChange={val => setChecked(val)}
                  backgroundColor={checked ? '$green10Dark' : 'lightgrey'}>
                  <Switch.Thumb animation="bouncy" backgroundColor="white" />
                </Switch>
              </XStack>

              <XStack ai="center" width="90%">
                <Checkbox
                  size="$4"
                  mr="$2"
                  required
                  onCheckedChange={val => setTicked(val)}>
                  <Checkbox.Indicator>
                    <Text fontSize={12}>✔️</Text>
                  </Checkbox.Indicator>
                </Checkbox>

                <Label size="$5" fontWeight="bold" color="$color.gray9Dark">
                  Accept terms and conditions
                </Label>
              </XStack>

              <Form.Trigger asChild disabled={status === 'off'}>
                <SubmitButton
                  disabled={!ticked}
                  bg={!ticked ? 'lightgrey' : '#3241ed'}
                  icon={
                    status === 'submitting' ? () => <Spinner /> : undefined
                  }>
                  {status === 'submitting' ? 'Submitting' : 'Submit'}
                </SubmitButton>
              </Form.Trigger>
            </Form>
          </YStack>
        </Container>
      </SafeAreaView>

      <Sheet
        forceRemoveScrollEnabled={open}
        open={open}
        onOpenChange={setOpen}
        snapPointsMode={'fit'}
        dismissOnSnapToBottom
        zIndex={100_000}
        animation="medium">
        <Sheet.Overlay
          animation="quick"
          enterStyle={{opacity: 0}}
          exitStyle={{opacity: 0}}
          backgroundColor="#000000ab"
        />
        <Sheet.Handle
          position="absolute"
          top={8}
          width={'30%'}
          bg={'lightgrey'}
        />
        <Sheet.Frame
          justifyContent="center"
          alignItems="center"
          paddingVertical={30}>
          <HeaderText
            size="ysm"
            fontWeight="bold"
            color="$color.gray9Dark"
            mb={10}>
            Select your gender
          </HeaderText>
          <XStack>
            <RadioGroup>
              <RadioGroup.Item value={'Male'}>
                <RadioGroup.Indicator />
              </RadioGroup.Item>
              <RadioGroup.Item value={'Female'}>
                <RadioGroup.Indicator />
              </RadioGroup.Item>
            </RadioGroup>
          </XStack>
        </Sheet.Frame>
      </Sheet>
    </TamaguiProvider>
  );
}
