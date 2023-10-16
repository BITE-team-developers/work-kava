import styled from '@emotion/styled';

export const DishTitle = styled.h3`
  position: relative;
  z-index: 2;
  margin: 11px 0;
  font-size: 36px;
  font-weight: 400;
  line-height: 1;
  text-align: right;
  color: ${props => props.theme.colors.white};

  @media screen and (${props => props.theme.devices.tablet}) {
    margin: 9px 0;
    font-size: 40px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin: 5px 0;
    font-size: 48px;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -11px;
    right: -31px;
    display: block;
    width: calc(100% + 31px);
    height: 58px;
    background-color: ${props => props.theme.colors.lightBlue};
    border-top-left-radius: 49px;

    @media screen and (${props => props.theme.devices.tablet}) {
      top: -9px;
    }

    @media screen and (${props => props.theme.devices.desktop}) {
      top: -5px;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  z-index: 2;
  min-height: 186px;
  margin-bottom: 24px;

  @media screen and (${props => props.theme.devices.tablet}) {
    margin-bottom: 19px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin-bottom: 8px;
    min-height: 246px;
  }
`;

export const DishImage = styled.img`
  position: absolute;
`;
export const PriceWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0 15px 36px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: 155%;
    border: 4px solid ${props => props.theme.colors.primary};
    border-bottom-right-radius: 80px;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    padding: 0 15px 26px;
  }
`;

export const PriceColumn = styled.div``;

export const PriceText = styled.p`
  margin-bottom: 20px;
  line-height: 1;
  text-align: center;
  color: ${props => props.theme.colors.white};

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 40px;
    margin-bottom: 15px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    font-size: 48px;
    margin-bottom: 14px;
  }
`;

export const Price = styled.p`
  display: inline-block;
  margin-right: 6px;
  font-size: 70px;
  font-weight: 700;
  line-height: 1;
  text-align: center;

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 80px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    font-size: 100px;
    margin-right: 4px;
  }
`;

export const Currency = styled.span`
  font-size: 35px;
  line-height: 1;

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 40px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    font-size: 60px;
  }
`;
