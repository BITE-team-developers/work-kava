import styled from '@emotion/styled';

export const DropdownInput = styled.div`
  position: relative;
  z-index: 10000;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 68px;
  font-size: 28px;
  line-height: 1;
  color: ${props => props.theme.colors.darkGray};

  padding: 16px;
  border-radius: 8px;
  border: 1.5px solid ${props => props.theme.colors.primary};

  cursor: pointer;

  &:hover,
  :focus,
  :active {
    border-color: ${props => props.theme.colors.accent};
    outline: none;
  }
`;

export const DropdownContent = styled.ul`
  position: absolute;
  top: 105%;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1.5px solid ${props => props.theme.colors.primary};

  &.hidden {
    display: none;
  }
`;

export const DropdownItem = styled.li`
  z-index: 10;
  padding: 10px 16px;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  transition: color ${props => props.theme.baseTransition},
    background-color ${props => props.theme.baseTransition};

  &:hover,
  :focus,
  :active {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};
  }

  &.selected {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};
  }
`;

export const DropdownButton = styled.span`
  position: absolute;
  right: 16px;
  top: 20px;
  fill: ${props => props.theme.colors.primary};
  transition: fill ${props => props.theme.baseTransition};
  cursor: pointer;

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.accent};
  }
`;
