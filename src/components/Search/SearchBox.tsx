import React from 'react';
import {Input, XStack} from 'tamagui';
import Search from '../../assets/images/search';
import BackIcon from '../../assets/images/back';
import {Dimensions} from 'react-native';

const SearchBox = () => {
  const windowWidth = Dimensions.get('window').width - 105;

  return (
    <XStack ai="center" paddingVertical={12} width={windowWidth}>
      <XStack paddingVertical={8}>
        <BackIcon />
      </XStack>
      <XStack
        borderWidth={1}
        borderRadius={30}
        borderBlockColor="#424548"
        ai="center"
        ml={32}
        paddingHorizontal={16}
        width="100%">
        <Search />
        <Input height={44} ml={8} bg="transparent" bw={0} width="96%" />
      </XStack>
    </XStack>
  );
};

export default SearchBox;
