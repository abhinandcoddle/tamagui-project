import {Card, XStack, Paragraph, Image, Button, H3} from 'tamagui';
import styles from './CardStyles';

type PropsType = {
  value?: string;
  label?: string;
};

export default (props: PropsType) => (
  <Card elevate size="$4" bordered {...props}>
    <Card.Header padded>
      <H3>Sony A7IV</H3>
      <Paragraph theme="alt2">Now available</Paragraph>
    </Card.Header>
    <Card.Footer padded>
      <XStack flex={1} />
      <Button borderRadius="$10">Purchase</Button>
    </Card.Footer>

    <Card.Background></Card.Background>
  </Card>
);
