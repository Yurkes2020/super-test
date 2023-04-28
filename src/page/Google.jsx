import {
  Section,
  Title,
  Box,
  Card,
  Plan,
  Dollar,
  Price,
  Period,
  List,
  Item,
  Button,
  Rotate,
  Text,
  Link,
} from '../page/Google.styled';

import { BsCheckCircle } from 'react-icons/bs';

export const Google = () => {
  const style = { color: 'green', marginRight: '10px' };
  return (
    <Section>
      <Title>Google Chrome Extension Plans</Title>
      <Box>
        <Card>
          <Plan>Free</Plan>
          <Dollar>$</Dollar>
          <Price>0</Price>
          <Period>/mo</Period>
          <List>
            <Item>
              <BsCheckCircle style={style} />
              Word Definitions
            </Item>
            <Item>
              <BsCheckCircle style={style} />
              Up to 10 Lists
            </Item>
          </List>
          <Button>
            <Link href="https://boostvocab.com/register">Sign up today</Link>
          </Button>
        </Card>
        <Card>
          <Plan>Monthly</Plan>
          <Dollar>$</Dollar>
          <Price>3.99</Price>
          <Period>/mo</Period>
          <List>
            <Item>
              <BsCheckCircle style={style} />
              Word Definitions
            </Item>
            <Item>
              <BsCheckCircle style={style} />
              Unlimited Lists
            </Item>
            <Item>
              <BsCheckCircle style={style} />
              Directly add words from any site using Chrome Extension
            </Item>
          </List>
          <Button>
            <Link target="new" href="https://buy.stripe.com/5kAdRpbLh3k71RS6oo">
              Sign up today
            </Link>
          </Button>
        </Card>
        <Card>
          <Plan>Yearly</Plan>
          <Dollar>$</Dollar>
          <Price>29.99</Price>
          <Period>/year</Period>
          <List>
            <Item>
              <BsCheckCircle style={style} />
              Word Definitions
            </Item>
            <Item>
              <BsCheckCircle style={style} />
              Unlimited Lists
            </Item>
            <Item>
              <BsCheckCircle style={style} />
              Directly add words from any site using Chrome Extension
            </Item>
          </List>
          <Button>
            <Link target="new" href="https://buy.stripe.com/aEU6oX3eL6wjdAA7st">
              Sign up today
            </Link>
          </Button>
          <Rotate>
            <Text>POPULAR</Text>
          </Rotate>
        </Card>
        <Card>
          <Plan>Lifetime</Plan>
          <Dollar>$</Dollar>
          <Price>99</Price>
          <Period>one time</Period>
          <List>
            <Item>
              <BsCheckCircle style={style} />
              Word Definitions
            </Item>
            <Item>
              <BsCheckCircle style={style} />
              Unlimited Lists
            </Item>
            <Item>
              <BsCheckCircle style={style} />
              Directly add words from any site using Chrome Extension
            </Item>
          </List>
          <Button>
            <Link target="new" href="https://buy.stripe.com/4gwfZxbLh8Er54428a">
              Sign up today
            </Link>
          </Button>
        </Card>
      </Box>
    </Section>
  );
};
