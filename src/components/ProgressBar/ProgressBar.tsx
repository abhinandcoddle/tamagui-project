import {Progress, Text} from 'tamagui';
import styles from './ProgressStyles';

type PropsType = {
  label?: string;
};

export default (props: PropsType) => (
  <Progress value={40} backgroundColor="#e3e3e3">
    <Progress.Indicator animation="bouncy" backgroundColor="#111" />
  </Progress>
);
