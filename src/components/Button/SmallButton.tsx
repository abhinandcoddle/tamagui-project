import {Button, Theme, XStack, Text} from 'tamagui';
import styles from './ButtonStyles';


type PropsType = {
  color?: any;
  bgColor?: any;
  borderColor?: any;
  borderRadius?: any;
  label?: string;
  disabled?: boolean;
  height?: number;
  maxWidth?: number;
};
export default (props: PropsType) => (
  <Button
    color={props.color}
    backgroundColor={props.bgColor}
    maxWidth={props.maxWidth}
    height={props.height}
    borderColor={props.borderColor}
    borderRadius={props.borderRadius}
    disabled={props.disabled}
    style={styles.btnSmStyle}
    >
    {props.label}
  </Button>
);
