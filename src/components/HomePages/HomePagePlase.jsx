import React from 'react';
import { Link } from 'react-router-dom';
import { BlueButton, WhiteButton } from 'styles/buttonStyles';
import { HomeSection } from 'components/App.styled';
import {
  ContainerHome,
  Title,
  Text,
  CoffeContainer,
  CoffeeImg,
  StyleContainerBtn,
  Picture,
  PicturesStyle
} from './HomePagesPlase.styled';

const HomePagePlase = ({ title, description, styles, linkTo }) => {
  const imageName = title.toLowerCase();
  return (
    <HomeSection styles={styles}>
      <ContainerHome>
        <Title styles={styles}>{title}</Title>
        <CoffeContainer styles={styles}>
          <Text styles={styles}>{description}</Text>

          <PicturesStyle styles={styles}>
            <Picture>
              <source
                srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/home-webp/${imageName}_desktop.webp 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/home-webp/${imageName}_desktop_x2.webp 2x`}
                media="(min-width: 1440px)"
              />

              <source
                srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/home-webp/${imageName}_tablet.webp 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/home-webp/${imageName}_tablet_x2.webp 2x`}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/home-webp/${imageName}_mobile.webp 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/home-webp/${imageName}_mobile_x2.webp 2x`}
                media="(max-width: 1023px)"
              />

              <CoffeeImg
                styles={styles}
                src={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/home-webp/${imageName}_desktop.webp`}
                alt={title}
                onError={e => {
                  console.error('Image loading error:', e);
                }}
              />
            </Picture>
          </PicturesStyle>
        </CoffeContainer>
        <StyleContainerBtn styles={styles}>
          {styles !== 'dark' ? (
            <BlueButton as={Link} to={linkTo} style={{ zIndex: 2 }}>
              Details
            </BlueButton>
          ) : (
            <WhiteButton as={Link} to={linkTo}>
              Details
            </WhiteButton>
          )}
        </StyleContainerBtn>
      </ContainerHome>
    </HomeSection>
  );
};

export default HomePagePlase;
