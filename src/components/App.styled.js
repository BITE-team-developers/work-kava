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
  margin: auto 0;
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
&::after {
  content: '';
  position: absolute;
  z-index: 1;
  right: 10px;
  top: 94px;

  background-size: contain;
  background-repeat: no-repeat;
  ${props => {
    if (props.name === 'Coffee classic') {
      return ` width: 94px; height: 85px; fill: ${props.theme.colors.darkBeige}; background-image: url(https://res.cloudinary.com/dm3dq4juf/image/upload/v1697531015/WorkKava/dcors/coffee_bean_7E7262.svg);`;
    } else if (props.name === 'Coffee with milk') {
      return ` width: 94px; height: 85px; right: 10px; top: 14px; fill: ${props.theme.colors.beige}; background-image: url(https://res.cloudinary.com/dm3dq4juf/image/upload/v1697531015/WorkKava/dcors/coffee_bean_E2D0AE.svg);`;
    } else if (props.name === 'Desserts') {
      return ` width: 94px; height: 95px;   right: 10px; top: 14px; fill: ${props.theme.colors.darkBeige}; background-image: url(https://res.cloudinary.com/dm3dq4juf/image/upload/v1697531015/WorkKava/dcors/dots_7E7262.svg);`;
    } else {
      return;
    }
  }};

  @media screen and (${props => props.theme.devices.tablet}) {
    ${props => {
      if (props.name === 'Coffee classic') {
        return ` width: 186px; height: 166px; right: 24px; top: 104px `;
      } else if (props.name === 'Coffee with milk') {
        return ` width: 186px; height: 166px; right: 24px; top: 24px `;
      } else if (props.name === 'Desserts') {
        return ` width: 190px; height: 190px;  right: 24px; top: 24px`;
      } else {
        return;
      }
    }};
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    ${props => {
      if (props.name === 'Coffee classic') {
        return ` width: 313px; height: 281px; `;
      } else if (props.name === 'Coffee with milk') {
        return ` width: 313px; height: 281px; `;
      } else if (props.name === 'Desserts') {
        return ` width: 250px; height: 250px; `;
      } else {
        return;
      }
    }};
  }
}
`;