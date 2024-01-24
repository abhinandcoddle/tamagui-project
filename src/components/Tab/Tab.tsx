import React from 'react';
import {
  H5,
  Separator,
  SizableText,
  Tabs,
  TabsContentProps,
  YStack,
} from 'tamagui';
type PropsType = {
  type?: string;
};

export function Tab(props: PropsType) {
  return (
    <YStack>
      {props.type === 'horizontal' ? <HorizontalTabs /> : <VerticalTabs />}
    </YStack>
  );
}

const HorizontalTabs = () => {
  return (
    <Tabs
      defaultValue="tab1"
      orientation="horizontal"
      flexDirection="column"
      width={'100%'}
      height={150}
      marginBottom={15}
      borderRadius="$4"
      borderWidth="$0.25"
      overflow="hidden"
      borderColor="$borderColor">
      <TabsContent value="tab1">
        <H5>Profile</H5>
      </TabsContent>

      <TabsContent value="tab2">
        <H5>About</H5>
      </TabsContent>

      <TabsContent value="tab3">
        <H5>Contact</H5>
      </TabsContent>
      <Separator />
      <Tabs.List
        separator={<Separator vertical />}
        disablePassBorderRadius="bottom">
        <Tabs.Tab flex={1} value="tab1">
          <SizableText fontFamily="$body">Profile</SizableText>
        </Tabs.Tab>
        <Tabs.Tab flex={1} value="tab2">
          <SizableText fontFamily="$body">About</SizableText>
        </Tabs.Tab>
        <Tabs.Tab flex={1} value="tab3">
          <SizableText fontFamily="$body">Contact</SizableText>
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};

const VerticalTabs = () => {
  return (
    <Tabs
      defaultValue="tab1"
      flexDirection="row"
      orientation="vertical"
      width={'100%'}
      marginBottom={15}
      borderRadius="$4"
      borderWidth="$0.25"
      overflow="hidden"
      borderColor="$borderColor">
      <Tabs.List disablePassBorderRadius="end" separator={<Separator />}>
        <Tabs.Tab value="tab1">
          <SizableText>Profile</SizableText>
        </Tabs.Tab>
        <Tabs.Tab value="tab2">
          <SizableText>Connections</SizableText>
        </Tabs.Tab>
        <Tabs.Tab value="tab3">
          <SizableText>Notifications</SizableText>
        </Tabs.Tab>
      </Tabs.List>
      <Separator vertical />
      <TabsContent value="tab1">
        <H5 textAlign="center">Profile</H5>
      </TabsContent>
      <TabsContent value="tab2">
        <H5 textAlign="center">Connections</H5>
      </TabsContent>
      <TabsContent value="tab3">
        <H5 textAlign="center">Notifications</H5>
      </TabsContent>
    </Tabs>
  );
};

const TabsContent = (props: TabsContentProps) => {
  return (
    <Tabs.Content
      backgroundColor="$background"
      key="tab3"
      padding="$2"
      alignItems="center"
      justifyContent="center"
      flex={1}
      borderColor="$background"
      borderRadius="$2"
      borderTopLeftRadius={0}
      borderTopRightRadius={0}
      borderWidth="$2"
      {...props}>
      {props.children}
    </Tabs.Content>
  );
};
