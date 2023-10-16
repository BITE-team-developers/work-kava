import styled from '@emotion/styled';

export const DishTitle = styled.h3`
  position: relative;
  z-index: 2;
  margin-top: 11px;
  font-size: 36px;
  font-weight: 400;
  line-height: 1;
  text-align: right;
  color: ${props => props.theme.colors.white};

  @media screen and (${props => props.theme.devices.tablet}) {
  }

  @media screen and (${props => props.theme.devices.desktop}) {
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
  }
`;
