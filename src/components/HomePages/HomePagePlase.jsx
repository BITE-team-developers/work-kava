import React from 'react';
import { Link } from 'react-router-dom';
import { BlueButton, WhiteButton } from 'styles/buttonStyles';
import { Container, HomeSection } from 'components/App.styled';
import {
  Title,
  Text,
  CoffeContainer,
  CoffeeImg,
  StyleContainerBtn,
  Picture
} from './HomePagesPlase.styled';

export const HomePagePlase = ({ title, description, styles, linkTo }) => {
  const imageName = title.toLowerCase();
  return (
    <HomeSection styles={styles}>
      <Container>
        <Title styles={styles}>{title}</Title>
        <CoffeContainer styles={styles}>
          <Text styles={styles}>{description}</Text>

          <Picture styles={styles}>
            <source
              srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/home-webp/${imageName}-desktop.webp 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/home-webp/${imageName}-desktop@2x.webp 2x`}
              type="image/webp"
              width={818}
              height={540}
              media="(min-width: 1440px)"
            />
            <source
              srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/home-webp/${imageName}-desktop.jpg 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/home-webp/${imageName}-desktop@2x.jpg 2x`}
              width={818}
              height={540}
              media="(min-width: 1440px)"
            />

            <source
              srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/home-webp/${imageName}-tablet.webp 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/home-webp/${imageName}-tablet@2x.webp 2x`}
              type="image/webp"
              width={516}
              height={480}
              media="(min-width: 1024px)"
            />
            <source
              srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/home-webp/${imageName}-tablet.jpg 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/home-webp/${imageName}-tablet@2x.jpg 2x`}
              width={516}
              height={480}
              media="(min-width: 1024px)"
            />

            <source
              srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/home-webp/${imageName}-mobile.webp 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/home-webp/${imageName}-mobile@2x.webp 2x`}
              type="image/webp"
              width={356}
              height={218}
              media="(max-width: 1023px)"
            />
            <source
              srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/home-webp/${imageName}-mobile.jpg 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/home-webp/${imageName}-mobile@2x.jpg 2x`}
              type="image/webp"
              width={356}
              height={218}
              media="(max-width: 1023px)"
            />

            <CoffeeImg
              styles={styles}
              width={356}
              height={218}
              src={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/home-webp/${imageName}-mobile.jpg`}
              alt={title}
              onError={e => {
                console.error('Image loading error:', e);
              }}
            />
          </Picture>
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
        </CoffeContainer>
      </Container>
    </HomeSection>
  );
};
