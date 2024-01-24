import React from 'react';
import {Container} from '../themeConfig/GlobalStyles';
import styles from './LoginScreen/LoginStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ListItems} from '../components/ListItem/List';
import {ListItem} from 'tamagui';
import {ChevronDown, Star} from '@tamagui/lucide-icons';
import {Tab} from '../components/Tab/Tab';

const TestingScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Container contentContainerStyle={styles.container}>
        <Tab type="horizontal" />
        <ListItems />
        <ListItem
          title="Snow"
          subTitle="Cool"
          icon={Star}
          iconAfter={ChevronDown}
          pressTheme
          marginTop={15}
          bordered
          borderRadius={10}
        />
      </Container>
    </SafeAreaView>
  );
};

export default TestingScreen;
