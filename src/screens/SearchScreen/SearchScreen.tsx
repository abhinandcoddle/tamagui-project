import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, styles} from '../../themeConfig/GlobalStyles';
import {HeaderText} from '../../components/HeaderText/HeaderText';
import Button from '../../components/Button/Button';

const SearchScreen = () => {
  const navigation = useNavigation();

  return (
    <Container automaticallyAdjustKeyboardInsets>
      <HeaderText title="Search Page" size={18} />
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
