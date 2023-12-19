import {RadioGroup, Label, XStack} from 'tamagui';
import styles from './RadioStyles';

type PropsType = {
  value?: any;
  label?: string;
};

export default (props: PropsType) => (
  <XStack width={300} alignItems="center" space="$2.5">
    <RadioGroup.Item size="$3" value={props.value} >
      <RadioGroup.Indicator  scale="$-0.75"/>
    </RadioGroup.Item>
    
    <Label>
      {props.label}
    </Label>
  </XStack>
);
