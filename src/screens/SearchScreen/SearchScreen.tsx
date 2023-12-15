import React from 'react';
import {Container} from '../../themeConfig/GlobalStyles';
import SearchBox from '../../components/Search/SearchBox';

const SearchScreen = () => {
  return (
    <Container automaticallyAdjustKeyboardInsets>
      <SearchBox />
    </Container>
  );
};

export default SearchScreen;
