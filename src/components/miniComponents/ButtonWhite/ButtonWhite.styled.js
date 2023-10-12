import styled from '@emotion/styled';

export const StyledButtonWhite = styled.button`
  width: 366px;
  height: 68px;

  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};

  border-radius: 8px;
  background-color: ${props => props.theme.colors.white};

  @media screen and (${props => props.theme.devices.tablet}) {
    width: 288px;
    height: 68px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    width: 402px;
    height: 68px;
  }
`;
