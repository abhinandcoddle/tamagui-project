import React from 'react';
import {ChevronRight, Cloud, Moon, Star, Sun, Apple} from '@tamagui/lucide-icons';
import {ListItem, XStack, YGroup} from 'tamagui';

export function ListItems() {
  return (
    <XStack>
      <ListItemDemo />
    </XStack>
  );
}

function ListItemDemo() {
  return (
    <YGroup bordered width={'100%'}>
      <YGroup.Item>
        <ListItem
          icon={Star}
          title="Star"
          subTitle="Twinkle"
          iconAfter={ChevronRight}
          pressTheme
        />
      </YGroup.Item>
      <YGroup.Item>
        <ListItem
          icon={Moon}
          title="Moon"
          subTitle="Night"
          iconAfter={ChevronRight}
          pressTheme
        />
      </YGroup.Item>
      <YGroup.Item>
        <ListItem
          icon={Sun}
          title="Sun"
          subTitle="Day"
          iconAfter={ChevronRight}
          pressTheme
        />
      </YGroup.Item>
      <YGroup.Item>
        <ListItem
          icon={Cloud}
          title="Cloud"
          subTitle="Rain"
          iconAfter={ChevronRight}
          pressTheme
        />
      </YGroup.Item>
    </YGroup>
  );
}
