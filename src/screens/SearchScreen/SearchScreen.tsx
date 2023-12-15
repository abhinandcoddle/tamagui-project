import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, styles} from '../../themeConfig/GlobalStyles';
import Button from '../../components/Button/Button';
import SearchBox from '../../components/Search/SearchBox';

const SearchScreen = () => {
  const navigation = useNavigation();

  return (
    <Container automaticallyAdjustKeyboardInsets>
      <SearchBox />
      <Button
        label="Go Back to Home Screen"
        color="white"
        size={16}
        bgColor="#393ecc"
        onClick={() => navigation.navigate('Home')}
        style={styles.primaryButton}
      />
    </Container>
  );
};

export default SearchScreen;
