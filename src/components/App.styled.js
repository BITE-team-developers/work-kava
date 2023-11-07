import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;

  ${props =>
    props.page === 'cafe' &&
    (props.firstDishes
      ? 'padding-top: 160px; padding-bottom: 80px;'
      : 'padding-top: 80px; padding-bottom: 80px;')};

  @media screen and (${props => props.theme.devices.desktop}) {
    padding-top: 100px;
    padding-bottom: 100px;

    ${props =>
      props.page === 'cafe' &&
      (props.firstDishes
        ? 'padding-top: 200px; padding-bottom: 120px;'
        : 'padding-top: 120px; padding-bottom: 120px;')};
  }
`;

export const DarkSection = styled(Section)`
  background-color: ${props => props.theme.colors.primary};
`;

export const Container = styled.div`
  padding: 0 24px;
  margin: 0 auto;
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

export const HomeSection = styled(Section)`
  background: ${props =>
    props.styles === 'dark'
      ? props.theme.colors.primary
      : props.theme.colors.white};

  color: ${props =>
    props.styles === 'dark'
      ? props.theme.colors.white
      : props.theme.colors.primary};
`;

export const CoworkingSection = styled(Section)`
  background: ${props =>
    props.Coworkingstyles === 'dark'
      ? props.theme.colors.primary
      : props.theme.colors.white};

  color: ${props =>
    props.styles === 'dark'
      ? props.theme.colors.white
      : props.theme.colors.primary};
`;

export const CafeSection = styled(Section)`
  position: relative;
  overflow: hidden;
  z-index: 0;
  background: ${props => {
    if (props.name === 'coffee-classic') {
      return props.theme.blueRadialGradient;
    } else if (props.name === 'coffee-with-milk') {
      return props.theme.beigeRadialGradient;
    } else if (props.name === 'desserts') {
      return props.theme.lightBeigeRadialGradient;
    } else {
      return '#fff';
    }
  }};
  @media screen and (${props => props.theme.devices.tablet}) {
    overflow: visible;
  }
`;

export const CafeContainer = styled(Container)``;
