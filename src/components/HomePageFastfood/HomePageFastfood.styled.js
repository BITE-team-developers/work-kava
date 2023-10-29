import styled from '@emotion/styled';
import fastfoodFries from '../../images/fastfood/frenchFries.svg';
import fastfoodFriesTablet from '../../images/fastfood/frenchFriesTablet.svg';
import zigzag from '../../images/fastfood/zigzag.svg';
import { Section } from 'components/App.styled';
import { WhiteButton } from 'styles/buttonStyles';

export const SectionFastfood = styled(Section)`
  padding-bottom: 100px;
  background: ${props => props.theme.colors.primary};

  @media screen and (${props => props.theme.devices.tablet}) {
    padding-bottom: 120px;
  }

  @media screen and (${props => props.theme.devices.onlymobile}) {
    padding-bottom: 140px;
  }
`;

export const Container = styled.div`
  position: relative;
  margin: auto;

  @media screen and (${props => props.theme.devices.mobile}) {
    width: ${props => props.theme.sizes.mobile}px;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    width: ${props => props.theme.sizes.tablet}px;

    &::before {
      content: '';
      position: absolute;
      top: 11px;
      left: 0;
      width: 185px;
      height: 95px;
      background-image: url(${zigzag});
      z-index: 1;
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    width: ${props => props.theme.sizes.desktop}px;

    &::before {
      content: '';
      position: absolute;
      top: 22px;
      left: 0;
      width: 185px;
      height: 95px;
      background-image: url(${zigzag});
      z-index: 1;
    }
  }
`;

export const FastfoodContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;

  @media screen and (${props => props.theme.devices.onlymobile}) {
    margin: 0 auto;
    padding-bottom: 24px;
    width: 100%;
    flex-direction: column;
    overflow: hidden;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    display: flex;
    flex-direction: row-reverse;

    &::before {
      content: '';
      position: absolute;
      top: 267px;
      width: 380px;
      height: 333px;
      right: -12px;
      background-image: url(${fastfoodFriesTablet});
      //   transform: rotate(-12.858deg);
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    display: flex;
    flex-direction: row-reverse;

    &::before {
      content: '';
      position: absolute;
      top: 315px;
      width: 452px;
      height: 400px;
      background-image: url(${fastfoodFries});
    }
  }
`;

export const FastfoodImg = styled.img`
  margin-top: 70px;
  width: 800px;

  @media screen and (${props => props.theme.devices.onlymobile}) {
    margin-right: 44px;
    margin-top: 20px;
    width: 100%;
    height: 218px;
    border-radius: 0px 134px 134px 0px;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    height: 410px;
    width: 516px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    height: 528px;
    width: 816px;
  }
`;

export const Title = styled.h2`
  margin-right: 24px;
  text-align: right;
  font-size: 60px;
  color: ${props => props.theme.colors.white};

  @media screen and (${props => props.theme.devices.onlymobile}) {
    text-align: center;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    margin-right: 24px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin-right: 138px;
    text-align: right;
    font-size: 70px;
  }
`;

export const Text = styled.p`
  position: relative;
  margin-top: 70px;
  text-align: right;
  color: ${props => props.theme.colors.white};

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    right: -40px;
    width: 5px;
    height: 100%;
    background-color: ${props => props.theme.colors.white};
  }

  @media screen and (${props => props.theme.devices.onlymobile}) {
    margin-right: 64px;
    margin-left: 11px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;

    &::before {
      height: 100%;
    }
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    margin-right: 50px;
    margin-left: 10px;
    &::before {
      height: 216px;
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin-right: 178px;
    margin-left: -205px;
  }
`;

export const CustomStyledButton = styled(WhiteButton)`
  margin-top: -23px;
  width: 100%;
  margin-top: 24px;
  text-align: center;
  color: ${props => props.theme.colors.black};
  position: absolute;

  @media screen and (${props => props.theme.devices.tablet}) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 444px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin-right: 145px;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
`;

export const Picture = styled.picture`
  width: 356px;
  height: 218px;

  @media screen and (${props => props.theme.devices.tablet}) {
    width: 3031px;
    height: 480px;
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    width: 5761px;
    height: 563px;
    margin-top: 36px;
  }
`;
