import React, {useState} from 'react';
import {Text} from 'tamagui';
import {Container, styles} from '../../themeConfig/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
import HomeStyles from './HomeStyles';
import {BottomSheet} from '../../components/BottomSheet/BottomSheet';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';

export default function HomeScreen() {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      <Container automaticallyAdjustKeyboardInsets>
        <Header
          content="title"
          label="Search"
          title="Home Screen"
          size={18}
          icon1={'Notification'}
          icon2={'More'}
        />
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
          style={styles.primaryButton}
          onClick={() => navigation.navigate('Search')}
        />
        <Button
          label="Open Testing Screen"
          color="white"
          size={16}
          bgColor="skyblue"
          style={styles.primaryButton}
          onClick={() => navigation.navigate('Test')}
        />
      </Container>

      <BottomSheet open={open} setOpen={setOpen} title="Your Teams">
        <Text style={HomeStyles.BottomSheetText}>|------Content------|</Text>
      </BottomSheet>
    </>
  );
}
