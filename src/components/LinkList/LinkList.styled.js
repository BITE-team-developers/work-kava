import styled from '@emotion/styled';

export const Links = styled.ul`
  display: flex;
  gap: 14px;
`;

export const LinkItem = styled.li`
  display: flex;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.primary};
`;
