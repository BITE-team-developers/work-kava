import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.backdrop};
  z-index: 6;
  box-sizing: border-box;

  animation: ${props => props.theme.baseTransition} alternate backdrop;

  @keyframes backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 366px;
  background: ${props => props.theme.colors.white};
  transform: translate(-50%, -50%);
  border-radius: 10px;

  animation: ${props => props.theme.baseTransition} alternate modal-content;

  @keyframes modal-content {
    from {
      transform: translate(-50%, 50%);
    }
    to {
      transform: translate(-50%, -50%);
    }
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 500px;
  }
`;
