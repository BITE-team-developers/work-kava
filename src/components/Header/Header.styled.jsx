import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 138px;
  z-index: 5;
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
