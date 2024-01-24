import React from 'react';
import {Container} from '../../themeConfig/GlobalStyles';
import Header from '../../components/Header/Header';
import {SafeAreaView} from 'react-native-safe-area-context';

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <Container automaticallyAdjustKeyboardInsets>
        <Header
          leftIcon="back"
          content="search"
          label="Search"

          // leftIcon="back"
          // content="title"
          // title="Search"
          // size={18}
          // icon1="Google"
          // icon2="Facebook"
        />
      </Container>
    </SafeAreaView>
  );
};

export default SearchScreen;
