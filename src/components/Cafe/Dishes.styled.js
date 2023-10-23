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

export const DishesList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;
  text-align: left;
`;
