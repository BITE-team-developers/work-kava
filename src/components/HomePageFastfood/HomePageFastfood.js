import React from 'react';
import { Link } from 'react-router-dom';
import fastfoodHeroDesktop from '../../images/fastfood/food.png';
import fastfoodHeroTablet from '../../images/fastfood/foodTablet.png';

import {
  Container,
  Title,
  Text,
  FastfoodContainer,
  FastfoodImg,
  CustomStyledButton,
  SectionFastfood,
  Picture
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
          {/* <FastfoodImg /> */}

          <Picture>
            <source
              srcSet={`${fastfoodHeroDesktop} 1x`}
              media="(min-width: 1440px)"
            />
            <source
              srcSet={`${fastfoodHeroTablet} 1x`}
              media="(min-width: 1024px)"
            />
            <FastfoodImg src={fastfoodHeroDesktop} alt="Coffee" />
          </Picture>
        </FastfoodContainer>
        <CustomStyledButton as={Link} to="/fastfood">
          Details
        </CustomStyledButton>
      </Container>
    </SectionFastfood>
  );
};

export default HomePageFastfood;
