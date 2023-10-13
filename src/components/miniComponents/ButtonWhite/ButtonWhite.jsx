import { StyledButtonWhite } from './ButtonWhite.styled';

export const ButtonWhite = ({
  type = 'submit',
  action,
  title = 'Subscribe',
  style
}) => {
  return (
    <>
      <StyledButtonWhite type={type} onClick={action} style={style}>
        <p>{title}</p>
      </StyledButtonWhite>
    </>
  );
};
