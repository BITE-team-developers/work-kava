import styled from '@emotion/styled';

export const FormTitle = styled.p`
  color: ${props => props.theme.colors.white};

  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;

  @media screen and (${props => props.theme.devices.tablet}) {
    text-align: start;
    line-height: 1.875;
  }
`;
export const FormBox = styled.div`
  gap: 38px;
  display: flex;
  flex-direction: column;
  margin-top: 27px;

  @media screen and (${props => props.theme.devices.tablet}) {
    padding-left: 26px;
    margin-top: 36px;
    gap: 40px;
    border-left: 5px solid ${props => props.theme.colors.white};
  }
`;

export const FormInput = styled.input`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  max-width: 366px;
  width: 100%;
  padding: 3px 16px;
  align-items: center;
  border-radius: 4px;
  color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.white};
  background-color: transparent;

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 288px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    max-width: 402px;
  }

  &::placeholder {
    color: ${props => props.theme.colors.darkGray};

    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }

  &:hover,
  :focus,
  :active {
    background-color: ${props => props.theme.colors.whiteButtonHover};
    color: ${props => props.theme.colors.primary};
    outline: none;
  }
`;
