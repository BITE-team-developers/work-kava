import styled from '@emotion/styled';
import coffee from '../../images/cafe-coworking/coffee.svg';
import coffeeTablet from '../../images/cafe-coworking/Coffee_tablet.png';
import zigzag from '../../images/cafe-coworking/two_zigzags.svg';
import { BlueButton } from 'styles/buttonStyles';
import coworkingImg from '../../images/cafe-coworking/HomePageCoworking.png';

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
      top: 30px;
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
      top: 300px;
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
      top: 260px;
      width: 544px;
      height: 431px;
      background-image: url(${coffee});
      z-index: -1;
    }
  }
`;

export const CoffeeImg = styled.div`
  margin-top: 70px;
  width: 800px;
  background-image: url(${coworkingImg});
  background-size: cover;

  @media screen and (${props => props.theme.devices.onlymobile}) {
    margin-left: 44px;
    margin-top: 20px;
    width: 100%;
    height: 249px;
    border-radius: 134px 0px 0px 134px;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    padding-right: 465px;
    height: 480px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    padding-right: 800px;
    height: 528px;
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
  padding: 25px 0px;
  text-align: center;
  color: white;

  @media screen and (${props => props.theme.devices.tablet}) {
    position: absolute;
    bottom: 100px;
    margin-left: 24px;
    width: 444px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin-left: 145px;
  }
`;
