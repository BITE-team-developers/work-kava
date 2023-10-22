import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Title,
  Text,
  CoffeContainer,
  CoffeeImg,
  CustomStyledButton
} from './HomePageCoworking.style';
import { Section } from 'components/App.styled';

const HomePageCoworking = () => {
  return (
    <Section>
      <Container>
        <Title>Cafe</Title>
        <CoffeContainer>
          <Text>
            Work with taste! Delicious aromatic coffee for every taste prepared
            by an experienced barista, as well as elegant desserts made with
            love by our confectioners. It's all waiting for you in our coffee
            shop.
          </Text>
          <CoffeeImg />
        </CoffeContainer>
        <Link to="/coworking">
          <CustomStyledButton>Details</CustomStyledButton>
        </Link>
      </Container>
    </Section>
  );
};

export default HomePageCoworking;
