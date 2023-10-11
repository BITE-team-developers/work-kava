import { StyledButton } from './Button.styled';

export const Button = ({ type = 'button', action, title = 'Book now' }) => {
  return (
    <>
      <StyledButton type={type} onClick={action}>
        <p>{title}</p>
      </StyledButton>
    </>
  );
};
