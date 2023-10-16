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
