import { StyledButtonWhite } from './ButtonWhite.styled';

export const ButtonWhite = ({
  type = 'submit',
  action,
  title = 'Subscribe'
}) => {
  return (
    <>
      <StyledButtonWhite type={type} onClick={action}>
        <p>{title}</p>
      </StyledButtonWhite>
    </>
  );
};
