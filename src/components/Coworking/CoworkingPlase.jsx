import { Container, Section } from 'components/App.styled';

import {
  Title,
  Wrapper,
  Number,
  Description,
  ImageBox,
  Picture,
  Img,
  Box,
  InfoBox
} from './CoworkingPlase.styled';
import { CoworkingBlueButton, CoworkingWhiteButton } from 'styles/buttonStyles';

const CoworkingPlase = ({ title, description, styles, id }) => {
  const imageName = title.toLowerCase().replace(/ /g, '-');

  return (
    <Wrapper styles={styles}>
      <Section>
        <Container>
          <Title styles={styles}>{title}</Title>
          <Box styles={styles}>
            <ImageBox styles={styles}>
              <Picture>
                <source
                  srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/coworking/${imageName}.png 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/coworking/${imageName}@2x.png 2x`}
                  media="(min-width: 1440px)"
                />

                <source
                  srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/coworking/${imageName}-table.png 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/coworking/${imageName}-table@2x.png 2x`}
                  media="(min-width: 1024px)"
                />
                <source
                  srcSet={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/coworking/${imageName}-mobil.png 1x,
                        https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/coworking/${imageName}-mobil@2x.png 2x`}
                  media="(max-width: 1023px)"
                />

                <Img
                  styles={styles}
                  src={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697884261/WorkKava/coworking/${imageName}.png`}
                  alt={title}
                />
              </Picture>
            </ImageBox>
            <InfoBox>
              <Number styles={styles}>{id}</Number>
              <Description styles={styles}>{description}</Description>
              {styles !== 'dark' ? (
                <CoworkingBlueButton>Book now</CoworkingBlueButton>
              ) : (
                <CoworkingWhiteButton>Book now</CoworkingWhiteButton>
              )}
            </InfoBox>
          </Box>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default CoworkingPlase;
