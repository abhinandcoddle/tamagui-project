import {Button, Theme} from 'tamagui';
import styles from './ButtonStyles';

type PropsType = {
  variant?: string;
  color?: string;
  background?: string;
  title?: string;
  disabled?: boolean;
};
export default (props: PropsType) => (
  <Button
    size="$4"
    backgroundColor={props.background}
    color={props.color}
    disabled={props.disabled}
    variant={props.variant}>
    {props.title}
  </Button>
);
