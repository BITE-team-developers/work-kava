import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;

  ${props => 
    props.page === "cafe" && 
    (props.firstDishes ? "padding-top: 160px; padding-bottom: 80px;" : "padding-top: 80px; padding-bottom: 80px;")};

  @media screen and (${props => props.theme.devices.desktop}) {
    padding-top: 100px;
    padding-bottom: 100px;

    ${props => 
    props.page === "cafe" && 
    (props.firstDishes ? "padding-top: 200px; padding-bottom: 120px;" : "padding-top: 120px; padding-bottom: 120px;")};
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
