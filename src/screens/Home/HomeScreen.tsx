import React, {useState} from 'react';
import {Text} from 'tamagui';
import {Container, styles} from '../../themeConfig/GlobalStyles';
import {useNavigation} from '@react-navigation/native';

import {BottomSheet} from '../../components/BottomSheet/BottomSheet';
import Button from '../../components/Button/Button';
import {HeaderText} from '../../components/HeaderText/HeaderText';

export default function HomeScreen() {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      <Container automaticallyAdjustKeyboardInsets>
        <HeaderText title="Home Page" size={18} />
        <Button
          label="Open Bottom Sheet"
          color="white"
          size={16}
          bgColor="#393ecc"
          onClick={() => setOpen(true)}
          style={styles.primaryButton}
        />
        <Button
          label="Open Search Screen"
          color="white"
          size={16}
          bgColor="#23a1a1"
          onClick={() => navigation.navigate('Search')}
        />
      </Container>

      <BottomSheet open={open} setOpen={setOpen} title="Your Teams">
        <Text fontWeight="bold" fontSize={20}>
          |------Content------|
        </Text>
      </BottomSheet>
    </>
  );
}
