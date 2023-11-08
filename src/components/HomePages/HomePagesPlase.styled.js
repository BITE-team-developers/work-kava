import styled from '@emotion/styled';
import coffee from '../../images/cafe-coworking/coffee.svg';
import coffeeTablet from '../../images/cafe-coworking/Coffee_tablet.png';
import twoZigzag from '../../images/cafe-coworking/two_zigzags.svg';
import fastfoodFries from '../../images/fastfood/frenchFries.svg';
import fastfoodFriesTablet from '../../images/fastfood/frenchFriesTablet.svg';
import zigzag from '../../images/fastfood/zigzag.svg';
import { Container } from 'components/App.styled';

export const ContainerHome = styled(Container)`
@media screen and (${props => props.theme.devices.tablet}) {
margin-bottom: ${props => (props.styles === 'dark' ? '-28px' : '1px')};
}

@media screen and (${props => props.theme.devices.desktop}) {
  padding: 0;
  z-index: -5;
`;

export const CoffeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${props => (props.styles === 'dark' ? 'row-reverse' : 'row')};

  @media screen and (${props => props.theme.devices.onlymobile}) {
    margin: 0 auto;
    padding-bottom: 24px;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
`;

export const CoffeeImg = styled.img`
  width: 356px;
  height: 218px;
  margin-top: 24px;

  @media screen and (${props => props.theme.devices.tablet}) {
    width: 516px;
    height: 480px;
    margin-left: ${props => (props.styles === 'dark' ? '-24px ' : '24px')};
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    width: 818px;
    height: 540px;
    margin-top: 50px;
  }
`;

export const Title = styled.h2`
  text-align: ${props => (props.styles === 'dark' ? 'right' : 'left')};
  font-size: 60px;
  position: relative;

  @media screen and (${props => props.theme.devices.onlymobile}) {
    text-align: ${props => (props.styles === 'dark' ? 'center' : 'left')};
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    margin-left: 0;
    &::before {
      content: '';
      position: absolute;
      ${props => (props.styles === 'dark' ? 'left: 15px;' : 'right: 15px; ')};
      width: ${props => (props.styles === 'dark' ? '180px' : '149px')};
      height: 88px;
      background-image: ${props =>
        props.styles === 'dark' ? `url(${zigzag});` : `url(${twoZigzag});`};
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin-left: 138px;
    text-align: ${props => (props.styles === 'dark' ? 'right' : 'left')};
    font-size: 70px;
    &::before {
      content: '';
      position: absolute;
      top: 0px;
      ${props => (props.styles === 'dark' ? 'left: -160px;' : 'right: 0; ')};
      width: ${props => (props.styles === 'dark' ? '185px' : '149px')};
      height: 92px;
      background-image: ${props =>
        props.styles === 'dark' ? `url(${zigzag});` : `url(${twoZigzag});`};
    }
  }
`;

export const Text = styled.p`
  position: relative;
  margin-top: 70px;
  ${props =>
    props.styles === 'dark'
      ? '  text-align:right;  padding-right: 10px; '
      : '  text-align:left;'};

  z-index: 3;

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    ${props => (props.styles === 'dark' ? 'right: -11px;  ' : 'left: -44px;')};
    width: 5px;
    height: 100%;

    background-color: ${props =>
      props.styles === 'dark'
        ? props.theme.colors.white
        : props.theme.colors.primary};
  }

  @media screen and (${props => props.theme.devices.onlymobile}) {
    ${props =>
      props.styles === 'dark' ? '   padding-right:35px ' : 'padding-right:5px'};
    margin-left: ${props => (props.styles === 'dark' ? '10px' : '44px')};
    margin-right: 11px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 24px;

    &::before {
      height: 100%;
    }
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    margin-left: ${props => (props.styles === 'dark' ? '24px  ' : '35px')};
    margin-right: 22px;

    &::before {
      height: ${props => (props.styles === 'dark' ? '216px  ' : '288px')};
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin-left: ${props => (props.styles === 'dark' ? '165px  ' : '178px')};
    margin-right: 40px;

    &::before {
      height: ${props => (props.styles === 'dark' ? '216px  ' : '288px')};
    }
  }
`;

export const StyleContainerBtn = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;

  @media screen and (${props => props.theme.devices.tablet}) {
    width: 414px;
    ${props =>
      props.styles === 'dark'
        ? 'margin-right: 0; margin-top: -29px '
        : 'margin-left: 0;'};
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    width: 414px;
    ${props =>
      props.styles === 'dark'
        ? 'padding-bottom: 25px; margin-right:1px '
        : 'margin-left:138px'};
  }
`;

export const Picture = styled.picture`
  width: 516px;
  &::before {
    display: none;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    width: 516px;
    height: 480px;
    margin-top: 29px;
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    width: 818px;
    height: 540px;
  }
`;

export const PicturesStyle = styled.div`
  display: flex;
  width: 516px;


  @media screen and (${props => props.theme.devices.tablet}) {
    width: 516px;
    height: 480px;
    &::before {
      content: '';
      position: absolute;
      ${props => (props.styles === 'dark' ? 'right: 0' : 'left: -25px;')};
      top: ${props => (props.styles === 'dark' ? '285px' : '314px')};
      
      width: 382px;
      height: 297px;
      background-image: ${props =>
        props.styles === 'dark'
          ? `url(${fastfoodFriesTablet});`
          : `url(${coffeeTablet});`};
      
    }
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    width: 818px;
    height: 540px;

    &::before {
      content: '';
      position: absolute;
      top: ${props => (props.styles === 'dark' ? '317px' : '289px')};
      ${props => (props.styles === 'dark' ? 'right:-117px' : 'left:0')};
      width: ${props => (props.styles === 'dark' ? '453px' : '544px')};
      height: ${props => (props.styles === 'dark' ? '400px' : '431px')};
      background-image: ${props =>
        props.styles === 'dark' ? `url(${fastfoodFries});` : `url(${coffee});`};
    }}
  }
`;
