import React from 'react';
import {Checkbox, Label, XStack, Text} from 'tamagui';
import styles from './CheckboxStyles';
import CheckIcons from '../../assets/icons/CheckIcons';

type PropsType = {
  label?: string;
};

export default (props: PropsType) => (
  <XStack width={300} alignItems="center" space="$2.5">
    <Checkbox size="$3.5" borderRadius="$1">
      <Checkbox.Indicator alignItems="center" justifyContent="center">
        {/* <CheckIcons /> */}
        <Text>*</Text>
      </Checkbox.Indicator>
    </Checkbox>

    <Label style={styles.checkBoxLabel}>{props.label}</Label>
  </XStack>
);
