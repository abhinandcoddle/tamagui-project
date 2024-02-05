import {Input} from 'tamagui';
import styles from './InputStyles';
import { tokens } from '../../../tamagui.config';

type PropsType = {
  placeholder?: string;
};

export default (props: PropsType) => (
  <Input
    size="$4"
    borderWidth={1}
    backgroundColor={tokens.color.bgColor}
    borderColor={tokens.color.primaryColor}
    borderRadius="$3"
    placeholder={props.placeholder}
    style={styles.inputStyle}
    keyboardType='number-pad'
  />
);
