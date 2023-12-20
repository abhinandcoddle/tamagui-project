import {Checkbox, Label, XStack, Text, Separator, Switch, SizeTokens} from 'tamagui';
import styles from './SwitchStyles';


export function SwitchWithLabel(props: { size: SizeTokens; defaultChecked?: boolean }) {
    const id = `switch-${props.size.toString().slice(1)}-${props.defaultChecked ?? ''}}`
    return (
      <XStack width={200} alignItems="center" space="$4">
        <Label
          paddingRight="$0"
          minWidth={50}
          justifyContent="flex-end"
          size={props.size}
          htmlFor={id}
        >
          Accept
        </Label>
        <Separator minHeight={20} vertical />
        <Switch id={id} size={props.size} defaultChecked={props.defaultChecked}>
          <Switch.Thumb />
        </Switch>
      </XStack>
    )
  }
