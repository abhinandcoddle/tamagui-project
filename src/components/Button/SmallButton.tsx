import {Button, Theme, XStack, Text} from 'tamagui';
import styles from './ButtonStyles';
import { Images } from '../../themeConfig';


type PropsType = {
  color?: string;
  background?: string;
  borderColor?: string;
  borderRadius?: number;
  title?: string;
  disabled?: boolean;
  height?: number;
  maxWidth?: number;
};
export default (props: PropsType) => (
  <Button
    size="$2"
    color={props.color}
    backgroundColor={props.background}
    maxWidth={props.maxWidth}
    height={props.height}
    borderColor={props.borderColor}
    borderRadius={props.borderRadius}
    disabled={props.disabled}
    style={styles.btnSmStyle}
    // icon={Images.FACEBOOK}
    icon={Images.ICON}
    >
    {props.title}
  </Button>
);
