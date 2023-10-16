import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (${props => props.theme.devices.desktop}) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

export const DarkSection = styled(Section)`
  background-color: ${props => props.theme.colors.primary};
`;

export const Container = styled.div`
  padding: 0 24px;
  margin: auto;
  text-align: center;

  @media screen and (${props => props.theme.devices.mobile}) {
    width: ${props => props.theme.sizes.mobile}px;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    width: ${props => props.theme.sizes.tablet}px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    width: ${props => props.theme.sizes.desktop}px;
    padding: 0 138px;
  }
`;
