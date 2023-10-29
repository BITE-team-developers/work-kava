import styled from '@emotion/styled';
import coffee from '../../images/cafe-coworking/coffee.svg';
import coffeeTablet from '../../images/cafe-coworking/Coffee_tablet.png';
import zigzag from '../../images/cafe-coworking/two_zigzags.svg';
import { BlueButton } from 'styles/buttonStyles';
import { Section } from 'components/App.styled';

export const SectionCafe = styled(Section)`
  margin-bottom: -100px;

  @media screen and (${props => props.theme.devices.onlymobile}) {
    padding-bottom: 140px;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    padding-bottom: 50px;
  }
`;

export const Container = styled.div`
  position: relative;
  margin: auto;
  padding-bottom: 100px;

  @media screen and (${props => props.theme.devices.mobile}) {
    width: ${props => props.theme.sizes.mobile}px;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    width: ${props => props.theme.sizes.tablet}px;

    &::before {
      content: '';
      position: absolute;
      top: 30px;
      right: 0;
      width: 149px;
      height: 88px;
      background-image: url(${zigzag});
      z-index: -1;
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    width: ${props => props.theme.sizes.desktop}px;

    &::before {
      content: '';
      position: absolute;
      top: 5px;
      right: 0;
      width: 149px;
      height: 88px;
      background-image: url(${zigzag});
      z-index: -1;
    }
  }
`;

export const CoffeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (${props => props.theme.devices.onlymobile}) {
    margin: 0 auto;
    padding-bottom: 24px;
    width: 100%;
    overflow: hidden;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    display: flex;
    flex-direction: row;

    &::before {
      content: '';
      position: absolute;
      top: 250px;
      width: 394px;
      height: 297px;
      background-image: url(${coffeeTablet});
      z-index: -1;
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    display: flex;
    flex-direction: row;

    &::before {
      content: '';
      position: absolute;
      top: 267px;
      width: 544px;
      height: 431px;
      background-image: url(${coffee});
      z-index: -1;
    }
  }
`;

export const CoffeeImg = styled.img`
  margin-top: 70px;
  width: 800px;

  @media screen and (${props => props.theme.devices.onlymobile}) {
    margin-left: 44px;
    margin-top: 20px;
    width: 100%;
    height: 218px;
    border-radius: 134px 0px 0px 134px;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    height: 415px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    height: 528px;
    margin-top: 35px;
  }
`;

export const Title = styled.h2`
  margin-left: 24px;
  text-align: left;
  font-size: 60px;

  @media screen and (${props => props.theme.devices.tablet}) {
    margin-left: 24px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin-left: 138px;
    text-align: left;
    font-size: 70px;
  }
`;

export const Text = styled.p`
  position: relative;
  margin-top: 70px;
  text-align: left;

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: -40px;
    width: 5px;
    height: 100%;
    background-color: ${props => props.theme.colors.primary};
  }

  @media screen and (${props => props.theme.devices.onlymobile}) {
    margin-left: 64px;
    margin-right: 11px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;

    &::before {
      height: 100%;
    }
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    margin-left: 64px;
    margin-right: 40px;
    &::before {
      height: 288px;
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin-left: 178px;
    margin-right: 40px;
  }
`;

export const CustomStyledButton = styled(BlueButton)`
  margin-top: -23px;
  width: 100%;
  margin-top: 24px;
  text-align: center;
  color: white;
  position: absolute;

  @media screen and (${props => props.theme.devices.tablet}) {
    position: absolute;
    bottom: 100px;
    margin-left: 24px;
    width: 444px;
    top: 100;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin-left: 145px;
  }
`;

export const Picture = styled.picture`
  width: 356px;
  height: 218px;

  @media screen and (${props => props.theme.devices.tablet}) {
    width: 3245px;
    height: 480px;
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    width: 5761px;
    height: 563px;
    margin-top: 36px;
  }
`;
