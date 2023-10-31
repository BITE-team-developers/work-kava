import styled from '@emotion/styled';
import { Backdrop } from 'components/Modal/Modal.styled';

export const BackdropHeader = styled(Backdrop)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 180px 0 50px 0;

  background-color: ${props => props.theme.colors.primary};

  &::before {
    content: '';
    position: absolute;
    top: -25px;
    left: -45px;

    width: 50%;
    height: 23%;

    background-image: url('https://res.cloudinary.com/dm3dq4juf/image/upload/v1697531015/WorkKava/dcors/coffee_bean_7E7262.svg');
    background-repeat: no-repeat;
    transform: scaleX(-1);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 32px;
  top: 32px;

  fill: ${props => props.theme.colors.white};

  transition: fill ${props => props.theme.baseTransition};

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.whiteButtonHover};
  }
`;
