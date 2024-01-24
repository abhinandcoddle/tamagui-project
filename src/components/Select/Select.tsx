import React, {useMemo, useState} from 'react';
import {
  Adapt,
  Label,
  Select,
  SelectProps,
  Sheet,
  XStack,
  YStack,
} from 'tamagui';
import notification from '../../assets/images/notification';
type PropsType = {
  leftIcon?: string;
};

export function SelectDemo() {
  return (
    <YStack space>
      <XStack ai="center" space>
        <Label f={1} fb={0}>
          Custom
        </Label>
        <SelectDemoItem />
      </XStack>
    </YStack>
  );
}
export function SelectDemoItem(props: SelectProps) {
  const [val, setVal] = useState('apple');
  return (
    <Select
      id="food"
      value={val}
      onValueChange={setVal}
      disablePreventBodyScroll
      {...props}>
      <Select.Trigger width={220} iconAfter={notification}>
        <Select.Value placeholder="Something" />
      </Select.Trigger>
      <Adapt when="sm" platform="touch">
        <Sheet
          modal
          dismissOnSnapToBottom
          animationConfig={{
            type: 'spring',
            damping: 20,
            mass: 1.2,
            stiffness: 250,
          }}>
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>

          <Sheet.Overlay
            animation="medium"
            enterStyle={{opacity: 0}}
            exitStyle={{opacity: 0}}
          />
        </Sheet>
      </Adapt>
      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        />
        <Select.Viewport
          // to do animations:
          // animation="quick"
          // animateOnly={['transform', 'opacity']}
          // enterStyle={{ o: 0, y: -10 }}
          // exitStyle={{ o: 0, y: 10 }}
          minWidth={200}>
          <Select.Group marginBottom={10}>
            <Select.Label fontWeight="bold" fontSize="$5">
              Fruits
            </Select.Label>

            {/* for longer lists memoizing these is useful */}

            {useMemo(
              () =>
                items.map((item, i) => {
                  return (
                    <Select.Item
                      index={i}
                      key={item.name}
                      value={item.name.toLowerCase()}>
                      <Select.ItemText fontSize="$4">
                        {item.name}
                      </Select.ItemText>

                      <Select.ItemIndicator marginLeft="auto" />
                    </Select.Item>
                  );
                }),

              [],
            )}
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        />
      </Select.Content>
    </Select>
  );
}
const items = [
  {name: 'Apple'},
  {name: 'Pear'},
  {name: 'Blackberry'},
  {name: 'Peach'},
  {name: 'Apricot'},
  {name: 'Melon'},
  {name: 'Honeydew'},
  {name: 'Starfruit'},
  {name: 'Blueberry'},
  {name: 'Raspberry'},
  {name: 'Strawberry'},
  {name: 'Mango'},
  {name: 'Pineapple'},
  {name: 'Lime'},
  {name: 'Lemon'},
  {name: 'Coconut'},
  {name: 'Guava'},
  {name: 'Papaya'},
  {name: 'Orange'},
  {name: 'Grape'},
  {name: 'Jackfruit'},
  {name: 'Durian'},
];
