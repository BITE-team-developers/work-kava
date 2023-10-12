import styled from '@emotion/styled';

export const Title = styled.h2`
  position: relative;
  z-index: 2;
  margin-bottom: 50px;
  font-family: Inter;
  font-size: 40px;
  font-weight: 700;
  line-height: 1;

  @media screen and (min-width: 1024px) {
    font-size: 60px;
  }

  @media screen and (min-width: 1440px) {
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
    z-index: -1;
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

export const Wrapper = styled.section`
padding: 40px;
  background: ${props => {
    switch (props.name) {
      case 'Coffee classic':
        return 'radial-gradient(92.89% 118.32% at 0% -1.02%, #1b253f 0%, #3c4f82 100%)';
      case 'Coffee with milk':
        return 'radial-gradient(148.54% 120.77% at 100% 0%, #656b7d 0%, #857661 100%)';
      case 'Desserts':
        return 'radial-gradient(258.19% 141.42% at 0% 0%, #e2d0ae 0%, rgba(226, 208, 174, 0) 100%)';
      default:
        return 'background-color: #fff;';
    }
  }};
`;
