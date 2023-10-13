import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

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
  /* border-bottom: 3px solid ${props => props.theme.colors.accent}; */
`;

export const Link = styled(NavLink)`
  height: 56px;

  &.active {
    color: ${props => props.theme.colors.accent};
    border-bottom: 3px solid ${props => props.theme.colors.accent};
  }
`;
