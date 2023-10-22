import styled from '@emotion/styled';

export const Title = styled.h2`
  position: relative;
  z-index: 2;
  margin-bottom: 50px;
  font-family: Inter;
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  text-align: left;

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 60px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin-bottom: 100px;
    font-size: 70px;
  }

  color: ${props =>
    props.styles === 'light'
      ? props.theme.colors.white
      : props.styles === 'dark'
      ? props.theme.colors.primary
      : 'inherit'};

  &::first-letter {
    color: ${props =>
      props.styles === 'light'
        ? props.theme.colors.primary
        : props.styles === 'dark'
        ? props.theme.colors.white
        : 'inherit'};
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -2;
    right: calc(100% - 0.75em);
    width: 100%;
    height: 1em;
    background-color: ${props =>
      props.styles === 'light'
        ? props.theme.colors.accent
        : props.styles === 'dark'
        ? props.theme.colors.lightBlue
        : 'inherit'};
  }
`;

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 0;
  background: ${props => {
    if (props.name === 'Coffee classic') {
      return props.theme.blueRadialGradient;
    } else if (props.name === 'Coffee with milk') {
      return props.theme.beigeRadialGradient;
    } else if (props.name === 'Desserts') {
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

export const DishesList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;
  text-align: left;
`;
