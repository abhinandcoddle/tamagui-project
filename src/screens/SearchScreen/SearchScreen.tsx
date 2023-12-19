import React from 'react';
import {Container} from '../../themeConfig/GlobalStyles';
import Header from '../../components/Header/Header';

const SearchScreen = () => {
  return (
    <Container automaticallyAdjustKeyboardInsets>
      <Header
        leftIcon="back"
        content="title"
        label="Search"
        title="Search Screen"
        size={18}
        icon1={'Notification'}
        icon2={'More'}
      />
    </Container>
  );
};

export default SearchScreen;
