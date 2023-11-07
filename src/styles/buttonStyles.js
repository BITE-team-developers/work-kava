import styled from '@emotion/styled';

const Button = styled.button`
  display: flex;
  justify-content: center;
  min-width: 100%;
  padding: 25px;
  font-weight: 700;
  line-height: 1;
  border-radius: 8px;
  z-index: 15;
`;

export const BlueButton = styled(Button)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};

  transition: background-color ${props => props.theme.baseTransition};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.darkButtonHover};
  }
`;

export const WhiteButton = styled(Button)`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primary};

  transition: background-color ${props => props.theme.baseTransition};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.whiteButtonHover};
  }
`;

export const FooterButton = styled(WhiteButton)`
  padding: 22px;
  font-size: 24px;
  max-width: 100%;

  @media screen and (${props => props.theme.devices.desktop}) {
    padding: 12px;
    font-size: 30px;
    line-height: 1.5;
  }
`;
