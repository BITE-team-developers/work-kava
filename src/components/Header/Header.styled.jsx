import styled from '@emotion/styled';
import { Container } from 'components/App.styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  position: fixed;
  /* top: 0;
  left: 0; */

  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  z-index: 5;
  background-color: ${props => props.theme.colors.headerBackground};
`;

export const ContainerHeader = styled(Container)`
  display: flex;
  justify-content: space-between;

  align-items: center;
  width: ${props => props.theme.sizes.mobile}px;
`;

export const List = styled.ul`
  display: flex;
  column-gap: 40px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  height: 56px;
  /* border-bottom: 3px solid ${props => props.theme.colors.accent}; */
`;

export const LinkItem = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  height: 56px;

  color: ${props => props.theme.colors.white};
  font-size: 24px;

  &.active {
    color: ${props => props.theme.colors.accent};

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;

      width: 100%;
      border-radius: 2px;
      border-bottom: 4px solid ${props => props.theme.colors.accent};
    }
  }
`;

export const LinkPhone = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;

  color: ${props => props.theme.colors.white};
  font-size: 24px;
`;
