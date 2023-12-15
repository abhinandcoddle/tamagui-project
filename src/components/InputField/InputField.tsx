import React from 'react';
import {Input} from 'tamagui';
import styles from './InputStyles';

type PropsType = {
  placeholder?: string;
};

export default (props: PropsType) => (
  <Input
    size="$4"
    borderWidth={1}
    borderRadius="$3"
    placeholder={props.placeholder}
    style={styles.inputStyle}
  />
);
