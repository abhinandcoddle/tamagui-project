import React from 'react';
import {Container} from '../../themeConfig/GlobalStyles';
import Header from '../../components/Header/Header';

const SearchScreen = () => {
  return (
    <Container automaticallyAdjustKeyboardInsets>
      <Header leftIcon="back" content="search" label="Search" />
    </Container>
  );
};

export default SearchScreen;
