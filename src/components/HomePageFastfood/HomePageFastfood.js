import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Title,
  Text,
  FastfoodContainer,
  FastfoodImg,
  CustomStyledButton,
  SectionFastfood
} from './HomePageFastfood.styled';

const HomePageFastfood = () => {
  return (
    <SectionFastfood>
      <Container>
        <Title>Fastfood</Title>
        <FastfoodContainer>
          <Text>
            Time for lunch, but not much time? Our fast food is at your service.
            Fast, high quality, tasty. Own baking and certified products. Great
            choice for every taste.
          </Text>
          <FastfoodImg />
        </FastfoodContainer>
        <Link to="/fastfood">
          <CustomStyledButton>Details</CustomStyledButton>
        </Link>
      </Container>
    </SectionFastfood>
  );
};

export default HomePageFastfood;
