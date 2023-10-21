import styled from '@emotion/styled';
import { Section } from 'components/App.styled';

const getUrl = (imageName, type = '') => {
  return `https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood/${imageName}${type}.jpg`;
};

export const Main = styled.main`
  padding-top: 80px;
  background-image: linear-gradient(${props => props.theme.darklinerGradient});
`;

export const FastfoodSection = styled(Section)`
  position: relative;
  z-index: 1;
  margin: 0 auto;
  /* max-width: ${props => props.theme.sizes.desktop}px; */

  background-image: linear-gradient(${props => props.theme.darklinerGradient}),
    url(${props => getUrl(props.bgImage, '-mobil')});
  &:nth-of-type(even) {
    background-image: linear-gradient(
        ${props => props.theme.lightlinerGradient}
      ),
      url(${props => getUrl(props.bgImage, '-mobil')});
  }
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (${props => props.theme.devices.retina}),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(${props => props.theme.darklinerGradient}),
      url(${props => getUrl(props.bgImage, '-mobil@2x')});
    &:nth-of-type(even) {
      background-image: linear-gradient(
          ${props => props.theme.lightlinerGradient}
        ),
        url(${props => getUrl(props.bgImage, '-mobil@2x')});
    }
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    &::after {
      content: '';
      position: absolute;
      top: 100px;
      right: 4px;
      z-index: -1;
      width: 202px;
      height: 202px;
      background-image: url('https://res.cloudinary.com/dm3dq4juf/image/upload/v1697531015/WorkKava/dcors/four_zigzags_ffffff.svg');
      background-repeat: no-repeat;
      background-size: cover;
    }

    background-image: linear-gradient(${props => props.theme.darklinerGradient}),
      url(${props => getUrl(props.bgImage, '-table')});
    &:nth-of-type(even) {
      &::after {
        background-image: url('https://res.cloudinary.com/dm3dq4juf/image/upload/v1697531015/WorkKava/dcors/dots_1B253F.svg');
      }
      background-image: linear-gradient(
          ${props => props.theme.lightlinerGradient}
        ),
        url(${props => getUrl(props.bgImage, '-table')});
    }

    @media screen and (${props => props.theme.devices.retina}),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          ${props => props.theme.darklinerGradient}
        ),
        url(${props => getUrl(props.bgImage, '-table@2x')});
      &:nth-of-type(even) {
        background-image: linear-gradient(
            ${props => props.theme.lightlinerGradient}
          ),
          url(${props => getUrl(props.bgImage, '-table@2x')});
      }
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    background-image: linear-gradient(${props => props.theme.darklinerGradient}),
      url(${props => getUrl(props.bgImage)});
    &:nth-of-type(even) {
      background-image: linear-gradient(
          ${props => props.theme.lightlinerGradient}
        ),
        url(${props => getUrl(props.bgImage)});
    }

    @media screen and (${props => props.theme.devices.retina}),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          ${props => props.theme.darklinerGradient}
        ),
        url(${props => getUrl(props.bgImage, '@2x')});
      &:nth-of-type(even) {
        background-image: linear-gradient(
            ${props => props.theme.lightlinerGradient}
          ),
          url(${props => getUrl(props.bgImage, '@2x')});
      }
    }
  }

  &:nth-of-type(odd) {
    background-color: ${props => props.theme.colors.primary};
  }
`;

export const Title = styled.h2`
  position: relative;
  margin-bottom: 50px;
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  text-align: left;
  color: ${props =>
    props.isEven ? props.theme.colors.white : props.theme.colors.primary};

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 60px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin-bottom: 100px;
    font-size: 70px;
  }

  &::first-letter {
    color: ${props =>
      props.isEven ? props.theme.colors.primary : props.theme.colors.white};
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    right: calc(100% - 0.7em);
    display: block;
    width: 100%;
    height: 1em;
    background-color: ${props => props.theme.colors.accent};
  }
`;
