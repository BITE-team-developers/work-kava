import styled from '@emotion/styled';
import { Section, Container } from 'components/App.styled';

const getUrl = (props, type = '') => {
  return props.theme.useWebp
    ? `https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood-webp/${props.bgImage}${type}.webp`
    : `https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/fastfood/${props.bgImage}${type}.jpg`;
};

export const FastfoodContainer = styled(Container)`
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0px;
    display: block;
    width: 51px;
    height: 40px;
    background-color: ${props => props.theme.colors.accent};

    @media screen and (${props => props.theme.devices.tablet}) {
      width: 68px;
      height: 60px;
    }

    @media screen and (${props => props.theme.devices.desktop}) {
      width: 186px;
      height: 70px;
    }
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    &::after {
      content: '';
      position: absolute;
      top: 0px;
      right: 4px;
      z-index: -1;
      width: 202px;
      height: 202px;
      background-image: url('https://res.cloudinary.com/dm3dq4juf/image/upload/v1697531015/WorkKava/dcors/four_zigzags_ffffff.svg');
      background-repeat: no-repeat;
      background-size: cover;
    }

    &.odd {
      &::after {
        background-image: url('https://res.cloudinary.com/dm3dq4juf/image/upload/v1697531015/WorkKava/dcors/dots_1B253F.svg');
      }
    }
  }
`;

export const FastfoodSection = styled(Section)`
  z-index: 2;
  margin: 0 auto;

  &:first-of-type {
    padding-top: 130px;
  }

  background-image: linear-gradient(${props => props.theme.darklinerGradient}),
    url(${props => getUrl(props, '-mobil')});
  &:nth-of-type(even) {
    background-image: linear-gradient(
        ${props => props.theme.lightlinerGradient}
      ),
      url(${props => getUrl(props, '-mobil')});
  }
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (${props => props.theme.devices.retina}),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(${props => props.theme.darklinerGradient}),
      url(${props => getUrl(props, '-mobil@2x')});
    &:nth-of-type(even) {
      background-image: linear-gradient(
          ${props => props.theme.lightlinerGradient}
        ),
        url(${props => getUrl(props, '-mobil@2x')});
    }
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    background-image: linear-gradient(${props => props.theme.darklinerGradient}),
      url(${props => getUrl(props, '-table')});
    &:nth-of-type(even) {
      background-image: linear-gradient(
          ${props => props.theme.lightlinerGradient}
        ),
        url(${props => getUrl(props, '-table')});
    }

    @media screen and (${props => props.theme.devices.retina}),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          ${props => props.theme.darklinerGradient}
        ),
        url(${props => getUrl(props, '-table@2x')});
      &:nth-of-type(even) {
        background-image: linear-gradient(
            ${props => props.theme.lightlinerGradient}
          ),
          url(${props => getUrl(props, '-table@2x')});
      }
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    &:first-of-type {
      padding-top: 180px;
    }

    background-image: linear-gradient(${props => props.theme.darklinerGradient}),
      url(${props => getUrl(props)});
    &:nth-of-type(even) {
      background-image: linear-gradient(
          ${props => props.theme.lightlinerGradient}
        ),
        url(${props => getUrl(props)});
    }

    @media screen and (${props => props.theme.devices.retina}),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          ${props => props.theme.darklinerGradient}
        ),
        url(${props => getUrl(props, '@2x')});
      &:nth-of-type(even) {
        background-image: linear-gradient(
            ${props => props.theme.lightlinerGradient}
          ),
          url(${props => getUrl(props, '@2x')});
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
    font-size: 70px;
  }

  &::first-letter {
    color: ${props =>
      props.isEven ? props.theme.colors.primary : props.theme.colors.white};
  }
`;
