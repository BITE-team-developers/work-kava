import styled from '@emotion/styled';

const Button = styled.button`
  padding: 25px 131px;
  font-weight: 700;
  line-height: 1;
  border-radius: 8px;

  @media screen and (${props => props.theme.devices.tablet}) {
    padding: 25px 170px;
  }
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

export const CoworkingBlueButton = styled(BlueButton)`
  padding: 25px 111px;

  @media screen and (${props => props.theme.devices.tablet}) {
    padding: 25px 150px;
  }
`;

export const CoworkingWhiteButton = styled(WhiteButton)`
  padding: 25px 111px;

  @media screen and (${props => props.theme.devices.tablet}) {
    padding: 25px 150px;
  }
`;

export const FormButton = styled(BlueButton)`
  padding: 25px 87px;

  @media screen and (${props => props.theme.devices.tablet}) {
    padding: 25px 128px;
  }
`;

export const FooterButton = styled(WhiteButton)`
  padding: 22px 123px;
  font-size: 24px;

  @media screen and (${props => props.theme.devices.tablet}) {
    padding: 22px 84px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    padding: 12px 126px;
    font-size: 30px;
    line-height: 1.5;
  }
`;
