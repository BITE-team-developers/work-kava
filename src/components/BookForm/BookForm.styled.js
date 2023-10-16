import styled from '@emotion/styled';
// import { ModalContent } from 'components/Modal/Modal.styled';
import { theme } from 'styles';

// export const FormHolder = styled(ModalContent)`
//   @media screen and (${theme.devices.tablet}) {
//     width: 517px;
//   }
// `;

export const Form = styled.form`
  padding: 32px 24px;

  @media screen and (${theme.devices.tablet}) {
    padding: 40px;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.28px;
  color: ${props => props.theme.colors.primaryText};

  padding: 14px 18px;
  border-radius: 8px;
  border: 1.5px solid ${props => props.theme.colors.inputBorder};
  box-shadow: ${props => props.theme.inputBoxShadow};

  &:hover,
  :focus,
  :active {
    border-color: ${props => props.theme.colors.accent};
    outline: none;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    padding: 14px 24px;
    max-height: 46px;
    font-size: 18px;
    letter-spacing: -0.36px;
  }
`;

export const Textarea = styled.textarea`
  padding: 14px 18px;
  width: 100%;
  height: 91px;

  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.28px;
  color: ${props => props.theme.colors.primaryText};

  border-radius: 8px;
  border: 1.5px solid ${props => props.theme.colors.inputBorder};
  box-shadow: ${props => props.theme.inputBoxShadow};
  resize: none;

  &:hover,
  :focus,
  :active {
    border-color: ${props => props.theme.colors.accent};
    outline: none;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    height: 137px;
    padding: 22px 24px;
    font-size: 18px;
    letter-spacing: -0.36px;
  }
`;

export const ErrorText = styled.p`
  color: ${props => props.theme.colors.validationError};
`;

export const FormTitle = styled.p`
  max-width: 255px;
  margin-bottom: 32px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.6px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primaryText};

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 298px;
    margin-bottom: 40px;
    font-size: 24px;
    letter-spacing: -0.72px;
  }
`;

export const Accent = styled.span`
  color: ${props => props.theme.colors.accent};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 18px;

  @media screen and (${props => props.theme.devices.tablet}) {
    gap: 18px;
  }
`;
