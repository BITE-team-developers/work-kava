import styled from '@emotion/styled';
import { DarkSection } from 'components/App.styled';

export const SectionHero = styled(DarkSection)`
  padding-top: 180px;
  background-repeat: no-repeat;
  background-color: #1b253f;
  background-position: 50% top;
  background-image: ${props =>
    `linear-gradient(90deg, rgba(27, 37, 63, 0.67) 56.77%, rgba(27, 37, 63, 0) 100%), url(https://res.cloudinary.com/dm3dq4juf/image/upload/v1697012573/WorkKava/${props.page}/hero-mobil.png)`};

  @media screen and (${props => props.theme.devices.tablet}) {
    padding-top: 130px;
    background-image: ${props =>
      `linear-gradient(90deg, rgba(27, 37, 63, 0.67) 56.77%, rgba(27, 37, 63, 0) 100%), url(https://res.cloudinary.com/dm3dq4juf/image/upload/v1697012573/WorkKava/${props.page}/hero-table.png)`};
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    padding-top: 180px;
    background-image: ${props =>
      `linear-gradient(90deg, rgba(27, 37, 63, 0.67) 56.77%, rgba(27, 37, 63, 0) 100%), url(https://res.cloudinary.com/dm3dq4juf/image/upload/v1697012573/WorkKava/${props.page}/hero.png)`};
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
  margin-bottom: 120px;
  margin-left: 24px;

  @media screen and (${props => props.theme.devices.tablet}) {
    width: 598px;
    padding: 40px 0 40px 24px;
    margin-bottom: 69px;
    margin-left: 0;
    background-color: rgba(27, 37, 63, 0.67);
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    width: 764px;
    padding: 52px 52px 52px 138px;
    margin-bottom: 134px;
  }
`;

export const MainText = styled.p`
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.5;
  text-align: left;
  margin-bottom: 50px;

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 60px;
    line-height: normal;
    margin-bottom: 40px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    font-size: 70px;
    margin-bottom: 20px;
  }
`;

export const DescrText = styled.p`
  position: relative;
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  padding-left: 40px;

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 30px;
    line-height: 1.2;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    content: '';
    height: 100%;
    width: 5px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 100%;
      height: 182px;
      width: 182px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url('https://res.cloudinary.com/dm3dq4juf/image/upload/v1697531015/WorkKava/dcors/four_zigzags_ffffff.svg');
      background-repeat: no-repeat;
      background-size: cover;
      z-index: 999;
    }
  }
`;
