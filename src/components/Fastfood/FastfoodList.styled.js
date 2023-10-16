import styled from '@emotion/styled';

export const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media screen and (${props => props.theme.devices.tablet}) {
    flex-direction: row;
    justify-content: center;
    gap: 24px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    gap: 46px;
  }
`;

export const Item = styled.li`
  padding: 31px;
  background-color: ${props => props.theme.colors.accent};
  border-radius: 80px 0px;
`;
