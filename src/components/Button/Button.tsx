import React from 'react';
import {Button, Text, View} from 'tamagui';
import styles from './ButtonStyles';
import {icons} from '../../themeConfig/icons';
import {TouchableOpacity} from 'react-native';
import {tokens} from '../../../tamagui.config';
import CircleIcon from '../../assets/icons/Circle';

type PropsType = {
  color?: any;
  size?: number;
  bgColor?: any;
  label?: string;
  disabled?: boolean;
  onClick?: any;
  style?: any;
  textStyle?: any;
  type?: any;
  icon?: any;
  height?: any;
  width?: any;
  iconRight?: boolean;
  alignCenter?: boolean;
};
export const Buttons = (props: PropsType) => {
  const Icon = icons[props.icon];

  return (
    <Button
      style={props.style}
      onPress={props.onClick}
      disabled={props.disabled}
      backgroundColor={
        props.disabled ? tokens.color.disabledColor : props.bgColor
      }
      width={props.width}
      height={props.height}>

        
      {props.alignCenter ? (
        <View style={[styles.alignCenter, props.iconRight? {flexDirection: 'row'} : {flexDirection: 'row-reverse'}, props.icon? {justifyContent: 'space-between'} : {justifyContent: 'center'}]}>
          {props.type === 'anchor' ? (
            <Text style={props.textStyle}>{props.label}</Text>
          ) : (
            <Text
              style={styles.buttonTextCenter}
              fontSize={props.size}
              color={props.disabled ? tokens.color.grayColor : props.color}>
              {props.label}
            </Text>
          )}
          {props.icon && (
            <View
              // style={
              //   props.iconRight ? styles.iconStackRights : styles.iconStackCenter
              // }
              >
              {/* <Icon/> */}
              <CircleIcon />
            </View>
          )}
        </View>
      ) : (
        <>
          {props.type === 'anchor' ? (
            <Text style={props.textStyle}>{props.label}</Text>
          ) : (
            <Text
              style={styles.buttonText}
              fontSize={props.size}
              color={props.disabled ? tokens.color.grayColor : props.color}>
              {props.label}
            </Text>
          )}
          {props.icon && (
            <View
              style={
                props.iconRight ? styles.iconStackRight : styles.iconStack
              }>
              {/* <Icon/> */}
              <CircleIcon />
            </View>
          )}
        </>
      )}

    </Button>
  );
};

