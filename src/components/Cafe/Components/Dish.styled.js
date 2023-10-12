import styled from '@emotion/styled';

export const DishItem = styled.li`
  position: relative;
  display: flex;
  ${props => (props.isEven ? 'row-reverse' : 'row')};
  ${props =>
    props.isEven
      ? `
        flex-direction: row-reverse;
        padding: 15px 35px 35px 0;
      `
      : `
        flex-direction: row;
        padding: 15px 0 35px 35px;
      `};
  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    height: 50%;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    ${props =>
      props.isEven
        ? `
      border-bottom: 4px solid ${
        props.styles !== 'dark'
          ? props.theme.colors.accent
          : props.theme.colors.lightBlue
      };
    border-right: 4px solid ${
      props.styles !== 'dark'
        ? props.theme.colors.accent
        : props.theme.colors.lightBlue
    };
    border-radius: 0 0 160px 0;
      `
        : `
        border-bottom: 4px solid ${
          props.styles !== 'dark'
            ? props.theme.colors.accent
            : props.theme.colors.lightBlue
        };
    border-left: 4px solid ${
      props.styles !== 'dark'
        ? props.theme.colors.accent
        : props.theme.colors.lightBlue
    };
    border-radius: 0px 0px 0px 160px;
      `};
  }
`;

export const DishItemBox = styled.div`
  position: relative;
  z-index: 1;
  flex-grow: 999;
  padding-top: 10px;

  ${props =>
    props.styles !== 'dark'
      ? `background-color: ${props.theme.colors.white}`
      : `background-color: ${props.theme.colors.accent}`};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    ${props => (props.isEven ? 'left: -100%;' : 'right: -100%;')}

    width: 100%;
    height: 100%;
    ${props =>
      props.styles !== 'dark'
        ? `background-color: ${props.theme.colors.white}`
        : `background-color: ${props.theme.colors.accent}`};
  }
`;

export const DishName = styled.h3`
  padding-bottom: 10px;
  font-family: Inter;
  font-size: 26px;
  font-weight: 400;
  line-height: 1;

  color: ${props => props.theme.colors.primary};
`;

export const IngredientsList = styled.ul`
  font-family: Inter;
  font-size: 18px;
  line-height: 1.5;
  height: 81px;
  ${props =>
    props.isEven
      ? `
        border-right: 5px solid ${props.theme.colors.primary};
        padding-right: 15px;
      `
      : `
        border-left: 5px solid ${props.theme.colors.primary};
        padding-left: 15px;
      `};
  color: ${props => props.theme.colors.primary};
`;

export const Price = styled.p`
  position: absolute;
  bottom: 0;
  z-index: 2;
  ${props =>
    props.isEven
      ? 'left: 0; padding-right: 29px; border-radius: 0px 35px 0px 0px;'
      : 'right: 0; padding-left: 29px; border-radius: 35px 0px 0px 0px;'}

  font-family: Inter;
  font-size: 70px;
  font-weight: 700;
  line-height: 1;
  ${props =>
    props.styles === 'dark'
      ? `background-color: ${props.theme.colors.lightBlue}; color: ${props.theme.colors.accent};`
      : `background-color: ${props.theme.colors.accent}; color: ${props.theme.colors.lightBlue};`};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    ${props => (props.isEven ? 'left: -100%;' : 'right: -100%;')}

    width: 100%;
    height: 100%;
    ${props =>
      props.styles === 'dark'
        ? `background-color: ${props.theme.colors.lightBlue}`
        : `background-color: ${props.theme.colors.accent}`};
  }
`;

export const Currency = styled.span`
  font-size: 35px;
  font-weight: 400;
  line-height: 35px;
`;

export const IngredientItem = styled.li`
  display: flex;
  white-space: nowrap;
  align-items: center;
  width: 100%;
  max-width: 153px;
`;

export const Dots = styled.span`
  white-space: nowrap;
  overflow: hidden;
`;

export const Amount = styled.span`
  min-width: 54px;
`;

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 178px;
  height: 170px;
  position: relative;
  z-index: 1;
  border-radius: ${props =>
    props.isEven ? '0px 85px 85px 0px' : '85px 0px 0px 85px'};
  ${props =>
    props.styles === 'dark'
      ? `background-color: ${props.theme.colors.white}`
      : `background-color: ${props.theme.colors.accent}`};
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    top: -15px;
    left: -15px;

    width: calc(100% + 30px);
    height: calc(100% + 30px);
    ${props =>
      props.styles === 'dark'
        ? `background-color: ${props.theme.colors.lightBlue}`
        : `background-color: ${props.theme.colors.accent}`};
  }
`;

export const Picture = styled.picture`
  position: relative;
  display: flex;
  z-index: 1;
  padding: 15px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: ${props =>
    props.isEven ? '0px 50% 50% 0px' : '50% 0px 0px 50%'};
  ${props =>
    props.styles !== 'dark'
      ? `background-color: ${props.theme.colors.white}`
      : `background-color: ${props.theme.colors.accent}`};
`;
export const Img = styled.img`
  display: block;
  ${props =>
    props.title === 'Desserts'
      ? 'width: 148px; height: 140px;'
      : `width: 100%;
  height: 100%;`};
`;
