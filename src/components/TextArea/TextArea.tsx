import React from 'react';
import {TextArea} from 'tamagui';
import styles from './TextAreaStyles';

type PropsType = {
  placeholder?: string;
};

export default (props: PropsType) => (
  <TextArea
    size="$4"
    borderWidth={1}
    borderRadius="$3"
    placeholder={props.placeholder}
    style={styles.textAreaStyle}
    textAlignVertical="top"
  />
);
