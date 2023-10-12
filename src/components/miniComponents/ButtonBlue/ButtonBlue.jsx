import { StyledButtonBlue } from './ButtonBlue.styled';

export const ButtonBlue = ({ type = 'button', action, title = 'Book now' }) => {
  return (
    <>
      <StyledButtonBlue type={type} onClick={action}>
        <p>{title}</p>
      </StyledButtonBlue>
    </>
  );
};
