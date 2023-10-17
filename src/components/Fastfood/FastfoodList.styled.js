import styled from '@emotion/styled';

export const ItemsList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media screen and (${props => props.theme.devices.tablet}) {
    flex-direction: row;
    justify-content: left;
    gap: 24px;
    padding-bottom: 24px;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 1;
      width: 100%;
      height: 50%;
      border-bottom: 4px solid ${props => props.theme.colors.accent};
      border-right: 4px solid ${props => props.theme.colors.accent};
      border-bottom-right-radius: 100px;
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    gap: 46px;
  }
`;

export const Item = styled.li`
  padding: 31px;
  background-color: ${props => props.theme.colors.accent};
  border-top-left-radius: 80px;
  border-bottom-right-radius: 80px;

  @media screen and (${props => props.theme.devices.tablet}) {
    min-width: 464px;
    &:nth-of-type(odd) {
      border-bottom-right-radius: 0;
    }

    &:nth-of-type(even) {
      border-top-left-radius: 0;
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    min-width: 547px;
  }
`;
