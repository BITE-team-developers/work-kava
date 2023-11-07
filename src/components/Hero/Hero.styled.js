import styled from '@emotion/styled';
import { DarkSection } from 'components/App.styled';

const url =
  'https://res.cloudinary.com/dm3dq4juf/image/upload/v1697012573/WorkKava/';

export const SectionHero = styled(DarkSection)`
  padding-top: 180px;
  padding-bottom: ${({ page }) => (page === 'home' ? '50px' : '210px')};
  background-repeat: no-repeat;
  background-color: #1b253f;
  background-position: 50% top;
  background-size: 414px;
  background-image: ${({ page }) =>
    props =>
      props.theme.useWebp
        ? `linear-gradient(90deg, rgba(27, 37, 63, 0.67) 56.77%, rgba(27, 37, 63, 0) 100%), url(${
            url + page
          }-webp/hero-mobil.webp)`
        : `linear-gradient(90deg, rgba(27, 37, 63, 0.67) 56.77%, rgba(27, 37, 63, 0) 100%), url(${
            url + page
          }/hero-mobil.png)`};

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: ${({ page }) =>
      props =>
        props.theme.useWebp
          ? `linear-gradient(90deg, rgba(27, 37, 63, 0.67) 56.77%, rgba(27, 37, 63, 0) 100%), url(${
              url + page
            }-webp/hero-mobil@2x.webp)`
          : `linear-gradient(90deg, rgba(27, 37, 63, 0.67) 56.77%, rgba(27, 37, 63, 0) 100%), url(${
              url + page
            }/hero-mobil@2x.png)`};
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    padding-top: 130px;
    padding-bottom: ${({ page }) => (page === 'home' ? '50px' : '159px')};
    background-size: 1024px;
    background-image: ${({ page }) =>
      props =>
        props.theme.useWebp
          ? `url(${url + page}-webp/hero-table.webp)`
          : `url(${url + page}/hero-table.png)`};

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: ${({ page }) =>
        props =>
          props.theme.useWebp
            ? `url(${url + page}-webp/hero-table@2x.webp)`
            : `url(${url + page}/hero-table@2x.png)`};
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    padding-top: 180px;
    padding-bottom: ${({ page }) => (page === 'home' ? '50px' : '258px')};
    background-size: 1440px;
    background-image: ${({ page }) =>
      props =>
        props.theme.useWebp
          ? `url(${url + page}-webp/hero.webp)`
          : `url(${url + page}/hero.png)`};

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: ${({ page }) =>
        props =>
          props.theme.useWebp
            ? `url(${url + page}-webp/hero@2x.webp)`
            : `url(${url + page}/hero@2x.png)`};
    }
  }
`;

export const HeroContainer = styled.div`
  margin: auto;

  @media screen and (${props => props.theme.devices.mobile}) {
    width: ${props => props.theme.sizes.mobile}px;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    width: ${props => props.theme.sizes.tablet}px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    width: ${props => props.theme.sizes.desktop}px;
  }
`;

export const TextContainer = styled.div`
  margin-bottom: ${({ page }) => (page === 'home' ? '120px' : '0')};
  padding: 0 24px;
  color: ${props => props.theme.colors.white};

  @media screen and (${props => props.theme.devices.tablet}) {
    width: 598px;
    margin-bottom: ${({ page }) => (page === 'home' ? '69px' : '0')};
    padding: 40px 24px;
    background-color: rgba(27, 37, 63, 0.67);
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    width: ${({ page }) => (page === 'home' ? '764px' : '711px')};
    margin-bottom: ${props => (props.page === 'home' ? '134px' : '0px')};
    padding: ${({ page }) =>
      page === 'home' ? '52px 52px 52px 138px' : '52px 108px 52px 138px'};
  }
`;

export const MainText = styled.h1`
  margin-bottom: 50px;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.5;
  text-align: left;

  @media screen and (${props => props.theme.devices.tablet}) {
    margin-bottom: 40px;
    font-size: ${({ page }) => (page === 'home' ? '60px' : '58px')};
    line-height: normal;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin-bottom: ${({ page }) => (page === 'home' ? '20px' : '40px')};
    font-size: ${({ page }) => (page === 'home' ? '70px' : '48px')};
  }
`;

export const DescrText = styled.p`
  position: relative;
  padding-left: 40px;
  font-size: ${({ page }) => (page === 'home' ? '24px' : '20px')};
  font-weight: 400;
  line-height: 1.5;
  text-align: left;

  @media screen and (${props => props.theme.devices.tablet}) {
    width: 412px;
    font-size: 30px;
    line-height: 1.2;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: #fff;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 100%;
      width: 182px;
      height: 182px;
      background-image: url('${url}dcors/four_zigzags_ffffff.svg');
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`;
