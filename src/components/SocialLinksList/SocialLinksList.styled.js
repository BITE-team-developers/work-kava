import styled from '@emotion/styled';

export const Links = styled.ul`
  display: flex;
  gap: 14px;
`;

export const LinkItem = styled.li`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  transition: ${props => `transform ${props.theme.baseTransition}`};

  &:hover {
    transform: scale(1.2);
  }
`;
