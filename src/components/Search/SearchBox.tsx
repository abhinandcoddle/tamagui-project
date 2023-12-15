import React from 'react';
import {Input, XStack} from 'tamagui';
import Search from '../../assets/images/search';
import BackIcon from '../../assets/images/back';
import {useNavigation} from '@react-navigation/native';
import SearchBoxStyles from './SearchBoxStyles';
import {Dimensions} from 'react-native';

const SearchBox = () => {
  const windowWidth = Dimensions.get('window').width - 105;
  const navigation = useNavigation();

  return (
    <XStack style={SearchBoxStyles.searchStack} width={windowWidth}>
      <XStack
        style={SearchBoxStyles.backIconStack}
        onPress={() => navigation.navigate('Home')}>
        <BackIcon />
      </XStack>
      <XStack style={SearchBoxStyles.inputStack}>
        <Search />
        <Input
          placeholder="Search"
          style={SearchBoxStyles.inputContent}
          bw={0}
        />
      </XStack>
    </XStack>
  );
};

export default SearchBox;
