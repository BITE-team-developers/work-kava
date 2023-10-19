import styled from '@emotion/styled';
// import { ModalContent } from 'components/Modal/Modal.styled';
import { theme } from 'styles';

// export const FormHolder = styled(ModalContent)`
//   @media screen and (${theme.devices.tablet}) {
//     width: 517px;
//   }
// `;

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
    font-size: 30px;
  }
`;

export const ContentWrapper = styled.div`
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
  color: ${props => props.theme.colors.validationError};
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  fill: ${props => props.theme.colors.primary};
  transition: fill ${props => props.theme.baseTransition};

  @media screen and (${props => props.theme.devices.tablet}) {
    right: 24px;
    top: 24px;
  }

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.accent};
  }
`;
