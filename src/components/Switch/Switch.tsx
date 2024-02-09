import {
  Checkbox,
  Label,
  XStack,
  Text,
  Separator,
  Switch,
  SizeTokens,
  View,
  Image,
} from 'tamagui';
import styles from './SwitchStyles';
import {tokens} from '../../../tamagui.config';
import demoImg from '../../assets/images/Image.png';
import { Images } from '../../themeConfig';

export function SwitchWithLabel(props: {
  size: SizeTokens;
  defaultChecked?: boolean;
  bgColor?: any;
  width?: number;
  displaySwitch?: boolean;
  title?: string;
  value?: any;
  image?: boolean;
  labelRight?: boolean;
  titleColor?: any;
}) {
  const id = `switch-${props.size.toString().slice(1)}-${
    props.defaultChecked ?? ''
  }}`;
  return (
    <XStack
      width={'100%'}
      alignItems="center"
      flexDirection={props.labelRight ? "row-reverse" : "row" }
      justifyContent={props.labelRight ? "flex-end" : "space-between"}
      backgroundColor={'#d2f8fc'}
      paddingVertical={7}
      gap={10}
      paddingHorizontal={16}>
      <XStack alignItems="center" gap={10}>
        {props.image ? (
          <Image
            source={Images.switchImg}
            style={styles.switchImg}
          />
        ) : (
          <></>
        )}
        <Label
          paddingRight="$0"
          minWidth={50}
          justifyContent="flex-end"
          fontSize={17}
          color={props.titleColor}
          htmlFor={id}>
          {props.title}
        </Label>
      </XStack>

      {/* <Separator minHeight={20} vertical /> */}

      {props.displaySwitch ? (
        <Switch
          id={id}
          size={props.size}
          width={props.width}
          defaultChecked={props.defaultChecked}
          backgroundColor={props.bgColor}
          borderColor={props.bgColor}>
          <Switch.Thumb style={styles.switchThumb} />
        </Switch>
      ) : (
        <></>
      )}
    </XStack>
  );
}
