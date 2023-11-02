import { Container, CoworkingSection } from 'components/App.styled';

import {
  Title,
  Number,
  Description,
  ImageBox,
  Picture,
  Img,
  Box,
  InfoBox
} from './CoworkingPlase.styled';
import { BlueButton, WhiteButton } from 'styles/buttonStyles';

const CoworkingPlase = ({
  title,
  description,
  styles,
  id,
  bookType,
  showBookForm
}) => {
  const imageName = title.toLowerCase().replace(/ /g, '-');

  return (
    <CoworkingSection Coworkingstyles={styles}>
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
          <InfoBox styles={styles}>
            <Number styles={styles} id={id}>{id}</Number>
            <Description styles={styles}>{description}</Description>
            {styles !== 'dark' ? (
              <BlueButton onClick={() => showBookForm(bookType)}>
                Book now
              </BlueButton>
            ) : (
              <WhiteButton onClick={() => showBookForm(bookType)}>
                Book now
              </WhiteButton>
            )}
          </InfoBox>
        </Box>
      </Container>
    </CoworkingSection>
  );
};

export default CoworkingPlase;
