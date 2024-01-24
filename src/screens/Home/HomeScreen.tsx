import React, {useState} from 'react';
import {Text} from 'tamagui';
import {Container, styles} from '../../themeConfig/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
import HomeStyles from './HomeStyles';
import {BottomSheet} from '../../components/BottomSheet/BottomSheet';
import {Buttons} from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView>
        <Container
          automaticallyAdjustKeyboardInsets
          contentContainerStyle={HomeStyles.container}>
          <Header
            content="title"
            label="Search"
            title="Home Screen"
            size={18}
            icon1={'Notification'}
            icon2={'More'}
          />
          <Buttons
            label="Open Bottom Sheet"
            color="white"
            size={16}
            bgColor="#393ecc"
            onClick={() => setOpen(true)}
            style={styles.primaryButton}
          />
          <Buttons
            label="Open Search Screen"
            color="white"
            size={16}
            bgColor="#23a1a1"
            style={styles.primaryButton}
            onClick={() => navigation.navigate('Search')}
          />
          <Buttons
            label="Open Testing Screen"
            color="white"
            size={16}
            bgColor="blue"
            style={styles.primaryButton}
            onClick={() => navigation.navigate('Test')}
          />
          <Buttons
            label="Open Login Screen"
            color="white"
            size={16}
            bgColor="darkgreen"
            style={styles.primaryButton}
            onClick={() => navigation.navigate('Login')}
          />
        </Container>
      </SafeAreaView>
      <BottomSheet open={open} setOpen={setOpen} title="Your Teams">
        <Text style={HomeStyles.BottomSheetText}>|------Content------|</Text>
      </BottomSheet>
    </>
  );
}
