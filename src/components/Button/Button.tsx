import {Button, Theme, XStack, Text} from 'tamagui';
import styles from './ButtonStyles';
import { Images } from '../../themeConfig';


type PropsType = {
  variant?: any;
  color?: string;
  background?: string;
  borderColor?: string;
  borderRadius?: number;
  title?: string;
  disabled?: boolean;
};
export default (props: PropsType) => (
  <Button
    size="$4"
    color={props.color}
    backgroundColor={props.background}
    borderColor={props.borderColor}
    borderRadius={props.borderRadius}
    disabled={props.disabled}
    variant={props.variant}
    style={styles.btnStyle}
    // icon={Images.FACEBOOK}
    >
    {props.title}
  </Button>
  
);
