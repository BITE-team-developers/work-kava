import styled from '@emotion/styled';
import coffee from '../../images/cafe-coworking/coffee.svg';
import coffeeTablet from '../../images/cafe-coworking/Coffee_tablet.png';
import twoZigzag from '../../images/cafe-coworking/two_zigzags.svg';
import fastfoodFries from '../../images/fastfood/frenchFries.svg';
import fastfoodFriesTablet from '../../images/fastfood/frenchFriesTablet.svg';
import zigzag from '../../images/fastfood/zigzag.svg';

export const Title = styled.h2`
  margin-bottom: 24px;
  ${props =>
    props.styles === 'dark' ? 'text-align: right' : 'text-align: left'};
  font-size: 60px;
  position: relative;

  @media screen and (${props => props.theme.devices.tablet}) {
    margin-bottom: 70px;
    font-size: 70px;
    &::before {
      content: '';
      position: absolute;
      top: 0px;
      ${props => (props.styles === 'dark' ? 'left: -7px' : 'right: -7px; ')};
      width: 188px;
      height: 102px;
      background-image: ${props =>
        props.styles === 'dark' ? `url(${zigzag});` : `url(${twoZigzag});`};
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    &::before {
      ${props =>
        props.styles === 'dark' ? 'left: -138px;' : 'right: -138px; '};
    }
  }
`;

export const CoffeContainer = styled.div`
  position: relative;
  margin-left: -24px;
  margin-right: -24px;
  padding: 0 24px;
  @media screen and (${props => props.theme.devices.tablet}) {
    display: grid;
    gap: 40px;
    ${props =>
      props.styles === 'dark'
        ? 'grid-template-columns: 516px 1fr; margin-left: -24px; margin-right: 0'
        : 'grid-template-columns: 1fr 516px; margin-left: 0; margin-right: -24px;'};
    padding: 0;
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    ${props =>
      props.styles === 'dark'
        ? 'grid-template-columns: 818px 1fr; margin-left: -138px;'
        : 'grid-template-columns: 1fr 818px; margin-right: -138px;'};
  }

  &::before {
    @media screen and (${props => props.theme.devices.onlymobile}) {
      display: none;
    }
    content: '';
    position: absolute;
    ${props => (props.styles === 'dark' ? 'right: -24px' : 'left: -24px;')};
    bottom: -50px;
    ${props =>
      props.styles === 'dark'
        ? 'width: 387px; height: 334px;'
        : 'width: 390px; height: 296px;'};
    background-image: ${props =>
      props.styles === 'dark'
        ? `url(${fastfoodFriesTablet});`
        : `url(${coffeeTablet});`};
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (${props => props.theme.devices.desktop}) {
      bottom: -100px;
      ${props => (props.styles === 'dark' ? 'right: -138px' : 'left: -138px;')};
      ${props =>
        props.styles === 'dark'
          ? 'width: 454px; height: 401px;'
          : 'width: 540px; height: 430px;'};
      background-image: ${props =>
        props.styles === 'dark' ? `url(${fastfoodFries});` : `url(${coffee});`};
    }
  }
`;

export const Text = styled.p`
  position: relative;

  margin-bottom: 24px;

  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  ${props =>
    props.styles === 'dark'
      ? 'margin-right: 40px; text-align:right;'
      : 'margin-left: 40px; text-align:left;'};

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    ${props => (props.styles === 'dark' ? 'right: -39px;  ' : 'left: -39px;')};
    width: 5px;
    height: 100%;

    background-color: ${props =>
      props.styles === 'dark'
        ? props.theme.colors.white
        : props.theme.colors.primary};
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    grid-column-start: ${props => (props.styles === 'dark' ? '2' : '1')};
    font-size: 30px;
    line-height: 1.2;
    &::before {
      height: ${props => (props.styles === 'dark' ? '216px  ' : '288px')};
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    &::before {
      height: ${props => (props.styles === 'dark' ? '216px  ' : '288px')};
    }
  }
`;

export const Picture = styled.picture`
  display: block;
  margin-bottom: 24px;
  &::before {
    display: none;
  }
  @media screen and (${props => props.theme.devices.tablet}) {
    grid-row-end: 3;
    grid-row-start: 1;
    grid-column-start: ${props => (props.styles === 'dark' ? '1' : '2')};
    margin-bottom: 0;
  }
`;

export const CoffeeImg = styled.img`
  ${props =>
    props.styles === 'dark'
      ? 'border-top-right-radius: 109px;  border-bottom-right-radius: 109px;'
      : 'border-top-left-radius: 109px;  border-bottom-left-radius: 109px;'}
  @media screen and (${props => props.theme.devices.onlymobile}) {
    ${props =>
      props.styles === 'dark'
        ? 'margin: 0 auto 0 -24px'
        : 'margin: 0 -24px 0 auto'};
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    margin: 0;
    ${props =>
      props.styles === 'dark'
        ? 'border-top-right-radius: 134px;  border-bottom-right-radius: 134px;'
        : 'border-top-left-radius: 134px;  border-bottom-left-radius: 134px;'}
  }
`;

export const StyleContainerBtn = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;

  @media screen and (${props => props.theme.devices.tablet}) {
    grid-column-start: ${props => (props.styles === 'dark' ? '2' : '1')};
    ${props =>
      props.styles === 'dark'
        ? 'margin-right: 0; margin-top: -29px '
        : 'margin-left: 0;'};
    margin-top: auto;
  }
`;
