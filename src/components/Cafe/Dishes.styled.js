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
  @media screen and (${props => props.theme.devices.tablet}) {
    width: 45px;
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    width: 53px;
  }
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    right: 0;
    top: -66px;

    background-size: contain;
    background-repeat: no-repeat;
    ${props => {
      if (props.name === 'coffee-classic') {
        return ` width: 94px; height: 85px; fill: ${props.theme.colors.darkBeige}; background-image: url(https://res.cloudinary.com/dm3dq4juf/image/upload/v1697531015/WorkKava/dcors/coffee_bean_7E7262.svg);`;
      } else if (props.name === 'coffee-with-milk') {
        return ` width: 94px; height: 85px; fill: ${props.theme.colors.beige}; background-image: url(https://res.cloudinary.com/dm3dq4juf/image/upload/v1697531015/WorkKava/dcors/coffee_bean_E2D0AE.svg);`;
      } else if (props.name === 'desserts') {
        return ` width: 94px; height: 95px;  fill: ${props.theme.colors.darkBeige}; background-image: url(https://res.cloudinary.com/dm3dq4juf/image/upload/v1697531015/WorkKava/dcors/dots_7E7262.svg);`;
      } else {
        return;
      }
    }};

    @media screen and (${props => props.theme.devices.tablet}) {
      top: -56px;
      ${props => {
        if (props.name === 'coffee-classic') {
          return ` width: 186px; height: 166px; `;
        } else if (props.name === 'coffee-with-milk') {
          return ` width: 186px; height: 166px; `;
        } else if (props.name === 'desserts') {
          return ` width: 190px; height: 190px; `;
        } else {
          return;
        }
      }};
    }

    @media screen and (${props => props.theme.devices.desktop}) {
      top: -96px;
      right: -125px;
      ${props => {
        if (props.name === 'coffee-classic') {
          return ` width: 313px; height: 281px; `;
        } else if (props.name === 'coffee-with-milk') {
          return ` width: 313px; height: 281px; `;
        } else if (props.name === 'desserts') {
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
