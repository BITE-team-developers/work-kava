import React from 'react';
import { Link } from 'react-router-dom';
import coworkingImg from '../../images/cafe-coworking/HomePageCoworking.png';
import coworkingImgTablet from '../../images/cafe-coworking/coworkingPeople.png';

import {
  SectionCafe,
  Container,
  Title,
  Text,
  CoffeContainer,
  CoffeeImg,
  CustomStyledButton,
  Picture
} from './HomePageCoworking.style';

const HomePageCoworking = () => {
  return (
    <SectionCafe>
      <Container>
        <Title>Coworking</Title>
        <CoffeContainer>
          <Text>
            Work with taste! Delicious aromatic coffee for every taste prepared
            by an experienced barista, as well as elegant desserts made with
            love by our confectioners. It's all waiting for you in our coffee
            shop.
          </Text>
          {/* <CoffeeImg /> */}
          <Picture>
            <source srcSet={`${coworkingImg} 1x`} media="(min-width: 1440px)" />
            <source
              srcSet={`${coworkingImgTablet} 1x`}
              media="(min-width: 1024px)"
            />
            <CoffeeImg src={coworkingImg} alt="People" />
          </Picture>
        </CoffeContainer>
        <CustomStyledButton as={Link} to="/coworking">
          Details
        </CustomStyledButton>
      </Container>
    </SectionCafe>
  );
};

export default HomePageCoworking;
