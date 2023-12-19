import React from 'react';
import {Input, Text, XStack} from 'tamagui';
import Search from '../../assets/images/search';
import BackIcon from '../../assets/images/back';
import {useNavigation} from '@react-navigation/native';
import HeaderStyles from './HeaderStyles';
import {Dimensions, TouchableOpacity} from 'react-native';
import {icons} from '../../themeConfig/icons';
type PropsType = {
  leftIcon?: string;
  content?: string;
  icon1?: string;
  icon2?: string;
  label?: any;
  title?: any;
  size?: number;
};

const Header = (props: PropsType) => {
  const demoWidth = Dimensions.get('window').width - 100;
  const navigation = useNavigation();
  const Icon1 = props?.icon1 ? icons[props.icon1] : null;
  const Icon2 = props?.icon2 ? icons[props.icon2] : null;

  return (
    <XStack style={HeaderStyles.searchStack}>
      {props.content === 'title' && (
        <XStack style={HeaderStyles.titleStack}>
          <Text
            fontSize={props.size}
            style={HeaderStyles.title}
            numberOfLines={1}
            ellipsizeMode="middle">
            {props.title}
          </Text>
        </XStack>
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={HeaderStyles.backIconStack}>
        {props.leftIcon === 'back' && <BackIcon />}
        {props.leftIcon === 'menu' && <BackIcon />}
      </TouchableOpacity>

      <XStack
        style={
          props.content === 'search'
            ? HeaderStyles.headerStack
            : HeaderStyles.nonSearch
        }
        width={demoWidth}>
        {props.content === 'search' && (
          <>
            <Search />
            <Input
              placeholder={props.label}
              style={HeaderStyles.inputContent}
              bw={0}
            />
          </>
        )}
        {props.content === 'title' && (
          <XStack style={HeaderStyles.iconsContent}>
            {props.icon1 && (
              <TouchableOpacity style={HeaderStyles.icons}>
                <Icon1 />
              </TouchableOpacity>
            )}
            {props.icon2 && (
              <TouchableOpacity style={HeaderStyles.icons}>
                <Icon2 />
              </TouchableOpacity>
            )}
          </XStack>
        )}
      </XStack>
    </XStack>
  );
};

export default Header;
