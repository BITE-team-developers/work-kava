import styled from '@emotion/styled';
import { theme } from 'styles';

export const Form = styled.form`
  padding: 50px 24px;

  @media screen and (${theme.devices.tablet}) {
    padding: 50px;
  }
`;

export const FormTitle = styled.p`
  margin-bottom: 40px;
  font-size: 30px;
  font-weight: 700;
  line-height: 1;
  text-align: center;

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 38px;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  font-size: 28px;
  line-height: 1;
  color: ${props => props.theme.colors.primary};

  padding: 16px 16px 16px 60px;
  border-radius: 8px;
  border: 1.5px solid ${props => props.theme.colors.primary};

  &:hover,
  :focus,
  :active {
    border-color: ${props => props.theme.colors.accent};
    outline: none;
  }
`;

export const PriceText = styled.p`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
`;

export const ErrorText = styled.p`
  font-size: 20px;
  color: ${props => props.theme.colors.validationError};
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  fill: ${props => props.theme.colors.primary};
  transition: fill ${props => props.theme.baseTransition};

  @media screen and (${props => props.theme.devices.tablet}) {
    right: 14px;
    top: 14px;
  }

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.accent};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const UserIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 16px;
  fill: ${props => props.theme.colors.darkGray};
  transform: translateY(-50%);
`;
