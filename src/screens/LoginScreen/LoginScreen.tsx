import React, {useState} from 'react';
import {Container} from '../../themeConfig/GlobalStyles';
import {Button, Image, Separator, Text, XStack, YStack} from 'tamagui';
import styles from './LoginStyles';
import {Buttons} from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import {BottomSheet} from '../../components/BottomSheet/BottomSheet';
import Profile from '../../assets/icons/user.png';
import Location from '../../assets/icons/globe.png';
import {Mail} from '@tamagui/lucide-icons';

const LoginScreen = () => {
  const [more, setMore] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('disabled');
  return (
    <>
      <Container contentContainerStyle={styles.container}>
        <YStack style={styles.headerStack}>
          <Text style={styles.loginText}>Sign in</Text>
          <XStack style={styles.subStack}>
            <Text style={styles.subText}>Don't have an account?</Text>
            <Buttons
              label="Create account"
              size={16}
              style={[styles.anchorButton, styles.createButton]}
              textStyle={styles.createText}
              type="anchor"
            />
          </XStack>
        </YStack>
        <YStack style={styles.inputStack}>
          <InputField
            size={16}
            style={[styles.inputField, styles.userInput]}
            label="Username"
            pColor="#595D62"
          />
          <InputField
            size={16}
            style={styles.inputField}
            label="Password"
            pColor="#595D62"
          />
          <XStack>
            <Buttons
              label="Show"
              size={16}
              style={[styles.anchorButton, styles.showButton]}
              textStyle={styles.buttonText}
              type="anchor"
            />
          </XStack>
        </YStack>
        <XStack height={56}>
          <Buttons
            label="Forgot Password?"
            size={16}
            style={[styles.anchorButton, styles.forgotButton]}
            textStyle={styles.createText}
            type="anchor"
          />
        </XStack>
        <Buttons
          label="Sign In"
          size={16}
          bgColor="#4E46B4"
          color="white"
          onClick={() => setOpen(true)}
          style={styles.signinButton}
        />
        <YStack style={styles.seperator}>
          <XStack style={styles.seperatorLine} />
          <XStack style={styles.seperatorText}>
            <Text style={styles.orText}>Or</Text>
          </XStack>
        </YStack>
        <YStack>
          <Buttons
            style={styles.socialButtons}
            icon="Google"
            label="Continue with Google"
          />
          <Buttons
            style={styles.socialButtons}
            icon="Facebook"
            label="Continue with Facebook"
          />
          <Buttons
            style={styles.socialButtons}
            icon="Twitter"
            label="Continue with Twitter"
          />
          {more && (
            <>
              <Buttons
                style={styles.socialButtons}
                icon="Telegram"
                label="Continue with Telegram"
              />
              <Buttons
                style={styles.socialButtons}
                icon="Line"
                label="Continue with Line"
              />
              <Buttons
                style={styles.socialButtons}
                icon="Whatsapp"
                label="Continue with WhatsApp"
              />
            </>
          )}
          <Buttons
            style={styles.socialButtons}
            icon={more ? 'Minus' : 'Add'}
            label={more ? 'Show less options' : 'Show more options'}
            onClick={() => setMore(!more)}
          />
        </YStack>
      </Container>
      <BottomSheet open={open} setOpen={setOpen} title={'Sign in error'}>
        <YStack style={styles.errorStack}>
          <YStack style={styles.errorContent}>
            <Image
              source={error === 'disabled' ? Profile : Location}
              style={styles.errorImage}
            />
            <Text style={styles.errorText}>
              {error === 'disabled'
                ? 'Your account is disabled'
                : 'Sorry! You cannot access this from your location'}
            </Text>
            {error === 'disabled' ? (
              <Text style={styles.errorSubText}>
                {error === 'disabled'
                  ? 'Please contact with us. You can email or use Live Chat'
                  : null}
              </Text>
            ) : null}
          </YStack>
          <YStack style={styles.contactStack}>
            <Text style={styles.helpHeader}>Need some help?</Text>
            <Separator marginVertical={12} bg="#c4c4c4" />
            <XStack style={styles.emailStack}>
              <Button icon={<Mail size="$2" />} padding={0} bg="transparent" />
              <YStack marginLeft={12}>
                <Text style={styles.emailUs}>Email us</Text>
                <Text style={styles.emailUsSub}>Contact us via email</Text>
              </YStack>
            </XStack>
          </YStack>
        </YStack>
      </BottomSheet>
    </>
  );
};

export default LoginScreen;
