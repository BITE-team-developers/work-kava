import styled from '@emotion/styled';

export const StyledButton = styled.button`
  width: 318px;
  height: 80px;

  font-size: 25px;
  color: ${props => props.theme.colors.white};

  border-radius: 8px;
  background-color: ${props => props.theme.colors.primary};
`;
