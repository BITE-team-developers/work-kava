import styled from '@emotion/styled';
import { Container } from 'components/App.styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  position: fixed;

  display: flex;
  justify-content: center;
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
  row-gap: 16px;
  font-size: 24px;

  @media screen and (${props => props.theme.devices.onlymobile}) {
    flex-direction: column;
    font-size: 30px;
    align-items: center;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
`;

export const LinkItem = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  height: 45px;

  color: ${props => props.theme.colors.white};
  transition: ${props => `transform ${props.theme.baseTransition}`};

  :hover,
  :focus {
    transform: scale(1.1);
  }

  &.active {
    @media screen and (${props => props.theme.devices.tablet}) {
      color: ${props => props.theme.colors.accent};
      height: 56px;

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
  }
`;

export const LinkPhone = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;

  color: ${props => props.theme.colors.white};
  font-size: 24px;

  transition: ${props => `transform ${props.theme.baseTransition}`};

  :hover,
  :focus {
    transform: scale(1.1);
  }
`;
export const ButtonStyled = styled.button`
  fill: ${props => props.theme.colors.white};
  transition: fill ${props => props.theme.baseTransition};

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.accent};
  }
`;
