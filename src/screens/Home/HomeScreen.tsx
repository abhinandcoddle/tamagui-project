import React, {useState} from 'react';
import {Checkbox, Text} from 'tamagui';
import {Container, styles} from '../../themeConfig/GlobalStyles';
import {Check} from '@tamagui/lucide-icons';
import {useNavigation} from '@react-navigation/native';

import {BottomSheet} from '../../components/BottomSheet/BottomSheet';
import {PrimaryButton} from '../../components/Buttons/Buttons';
import {HeaderText} from '../../components/HeaderText/HeaderText';

export default function HomeScreen() {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      <Container automaticallyAdjustKeyboardInsets>
        <HeaderText title="Home Page" size={18} />
        <PrimaryButton
          label="Open Bottom Sheet"
          color="white"
          size={16}
          bgColor="#393ecc"
          onClick={() => setOpen(true)}
          style={styles.primaryButton}
        />
        <PrimaryButton
          label="Open Search Screen"
          color="white"
          size={16}
          bgColor="#23a1a1"
          onClick={() => navigation.navigate('Search')}
        />
        <Checkbox>
          <Checkbox.Indicator>
            <Check />
          </Checkbox.Indicator>
        </Checkbox>
      </Container>

      <BottomSheet open={open} setOpen={setOpen} title="Your Teams">
        <Text fontWeight="bold" fontSize={20}>
          |------Content------|
        </Text>
      </BottomSheet>
    </>
  );
}
