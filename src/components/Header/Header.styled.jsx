import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 80px;
  padding: 0 138px;

  background-color: ${props => props.theme.colors.headerBackground};
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 118px;
`;
export const StyledNav = styled.nav``;
export const List = styled.ul`
  display: flex;
  justify-content: space-between;

  gap: 40px;
`;
export const Item = styled.li`
  height: 56px;
  border-bottom: 3px solid ${props => props.theme.colors.accent};
`;
