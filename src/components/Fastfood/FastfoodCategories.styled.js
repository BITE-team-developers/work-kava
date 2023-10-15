import styled from '@emotion/styled';
import { Section } from 'components/App.styled';

const getUrl = (imageName, type = '') => {
  console.log(imageName);

  return `https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood/${imageName}${type}.jpg`;
};

export const FastfoodSection = styled(Section)`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.desktop}px;

  background-image: url(${props => getUrl(props.bgImage, '-mobil')});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (${props => props.theme.devices.retina}),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${props => getUrl(props.bgImage, '-mobil@2x')});
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    background-image: url(${props => getUrl(props.bgImage, '-table')});

    @media screen and (${props => props.theme.devices.retina}),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${props => getUrl(props.bgImage, '-table@2x')});
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    background-image: url(${props => getUrl(props.bgImage)});

    @media screen and (${props => props.theme.devices.retina}),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${props => getUrl(props.bgImage, '@2x')});
    }
  }

  &:nth-of-type(odd) {
    background-color: ${props => props.theme.colors.primary};
  }
`;
