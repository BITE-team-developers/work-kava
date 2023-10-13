import { StyledButtonBlue } from './ButtonBlue.styled';

export const ButtonBlue = ({
  type = 'button',
  action,
  title = 'Book now',
  style
}) => {
  return (
    <>
      <StyledButtonBlue type={type} onClick={action} style={style}>
        <p>{title}</p>
      </StyledButtonBlue>
    </>
  );
};
