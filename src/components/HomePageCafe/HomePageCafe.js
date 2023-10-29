import React from 'react';
import { Link } from 'react-router-dom';
import coffeeCapsDesktop from '../../images/cafe-coworking/Cafe_caps.png';
import coffeeCapsTablet from '../../images/cafe-coworking/coffeeCapsTablet.png';

import {
  SectionCafe,
  Container,
  Title,
  Text,
  CoffeContainer,
  CoffeeImg,
  CustomStyledButton,
  Picture
} from './HomePageCafe.style';

const HomePageCafe = () => {
  return (
    <SectionCafe>
      <Container>
        <Title>Cafe</Title>
        <CoffeContainer>
          <Text>
            Work with taste! Delicious aromatic coffee for every taste prepared
            by an experienced barista, as well as elegant desserts made with
            love by our confectioners. It's all waiting for you in our coffee
            shop.
          </Text>
          <Picture>
            <source
              srcSet={`${coffeeCapsDesktop} 1x`}
              media="(min-width: 1440px)"
            />
            <source
              srcSet={`${coffeeCapsTablet} 1x`}
              media="(min-width: 1024px)"
            />

            <CoffeeImg src={coffeeCapsDesktop} alt="Coffee" />
          </Picture>
        </CoffeContainer>
        <CustomStyledButton as={Link} to="/cafe">
          Details
        </CustomStyledButton>
      </Container>
    </SectionCafe>
  );
};

export default HomePageCafe;
