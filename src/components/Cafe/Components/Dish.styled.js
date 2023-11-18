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
  @media screen and (${props => props.theme.devices.tablet}) {
    gap: 30px;
    align-items: center;
    justify-content: space-between;

    ${props =>
      props.isEven
        ? `
        padding: 20px 40px 40px 0;
      `
        : `
        padding: 20px 0 40px 40px;
      `};
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    ${props =>
      props.isEven
        ? `
        padding: 20px 44px 44px 0;
      `
        : `
        padding: 20px 0 44px 44px;
      `};
  }

  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    height: 120px;
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

    @media screen and (${props => props.theme.devices.tablet}) {
      height: 170px;
      ${props =>
        props.isEven
          ? `border-radius: 0px 0px 170px 0px;`
          : `border-radius: 0px 0px 0px 170px;`}
    }
    @media screen and (${props => props.theme.devices.desktop}) {
      height: 194px;
      ${props =>
        props.isEven
          ? `border-radius: 0px 0px 194px 0px;`
          : `border-radius: 0px 0px 0px 194px;`}
    }
  }
`;

export const DishItemBox = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 10px;

  ${props =>
    props.styles !== 'dark'
      ? `background-color: ${props.theme.colors.white}`
      : `background-color: ${props.theme.colors.accent}`};

  @media screen and (${props => props.theme.devices.tablet}) {
    background-color: transparent;
  }

  @media screen and (${props => props.theme.devices.onlymobile}) {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      ${props => (props.isEven ? 'left: -1000%;' : 'right: -1000%;')}

      width: 1000%;
      height: 100%;
      ${props =>
        props.styles !== 'dark'
          ? `background-color: ${props.theme.colors.white}`
          : `background-color: ${props.theme.colors.accent}`};
    }
  }
`;

export const DishName = styled.h3`
  margin-bottom: 10px;
  font-size: 26px;
  font-weight: 400;
  line-height: 1;

  color: ${props => props.theme.colors.primary};
  @media screen and (${props => props.theme.devices.tablet}) {
    margin-bottom: 40px;
    font-size: 40px;
    ${props =>
      props.styles !== 'dark'
        ? `color: ${props.theme.colors.white}`
        : `color: ${props.theme.colors.accent}`};
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    margin-bottom: 36px;
    font-size: 48px;
  }
`;

export const IngredientsList = styled.ul`
  width: 153px;
  height: 81px;
  display: grid;
  grid-template-columns: calc(100% - 56px) 56px;
  grid-template-rows: 33%;
  font-size: 18px;
  line-height: 1.5;

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

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 244px;
    width: 100%;
    font-size: 24px;
    height: 171px;
    grid-template-columns: calc(100% - 76px) 76px;
    ${props =>
      props.styles !== 'dark'
        ? `color: ${props.theme.colors.white}; border-color: ${props.theme.colors.white}`
        : `color: ${props.theme.colors.accent}; border-color: ${props.theme.colors.accent}`};
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    grid-template-columns: calc(100% - 95px) 95px;
    max-width: 282px;
    height: 210px;
    font-size: 30px;
  }
`;

export const Price = styled.p`
  position: absolute;
  bottom: 0;
  z-index: 2;
  display: flex;
  align-items: baseline;
  ${props =>
    props.isEven
      ? 'left: 0; padding-right: 29px; border-radius: 0px 35px 0px 0px;'
      : 'right: 0; padding-left: 29px; border-radius: 35px 0px 0px 0px;'}

  font-size: 70px;
  font-weight: 700;
  line-height: 1;
  ${props =>
    props.styles === 'dark'
      ? `background-color: ${props.theme.colors.lightBlue}; color: ${props.theme.colors.accent};`
      : `background-color: ${props.theme.colors.accent}; color: ${props.theme.colors.primary};`};

  @media screen and (${props => props.theme.devices.tablet}) {
    position: static;
    justify-content: center;
    height: 240px;
    font-size: 100px;
    padding: 50px 45px;
    ${props =>
      props.styles !== 'dark'
        ? `border: 20px solid ${props.theme.colors.white}; `
        : `border: 20px solid ${props.theme.colors.accent}; `}

    ${props =>
      props.isEven
        ? 'border-left: none; border-radius: 0px 120px 120px 0px;'
        : 'border-right: none; border-radius: 120px 0px 0px 120px;'}
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    height: 280px;
    font-size: 120px;
    padding: 60px 45px;

    ${props =>
      props.isEven
        ? 'border-left: none; border-radius: 0px 140px 140px 0px;'
        : 'border-right: none; border-radius: 140px 0px 0px 140px;'}
  }

  @media screen and (${props => props.theme.devices.onlymobile}) {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      ${props => (props.isEven ? 'left: -1000%;' : 'right: -1000%;')}

      width: 1000%;
      height: 100%;
      ${props =>
        props.styles === 'dark'
          ? `background-color: ${props.theme.colors.lightBlue}`
          : `background-color: ${props.theme.colors.accent}`};
    }
  }
`;

export const Currency = styled.span`
  font-size: 35px;
  font-weight: 400;
  line-height: 1;

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 50px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    font-size: 60px;
  }
`;

export const IngredientItem = styled.li`
  white-space: nowrap;
  overflow: hidden;
`;

export const Dots = styled.span`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`;

export const Amount = styled.span`
  padding-left: 2px;
`;

export const ImageBox = styled.div`
  display: flex;
  flex-shrink: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 178px;
  height: 170px;
  position: relative;
  z-index: 1;
  border-radius: ${props =>
    props.isEven ? '0px 85px 85px 0px' : '85px 0px 0px 85px'};
  ${props =>
    props.styles === 'dark'
      ? `background-color: ${props.theme.colors.accent}`
      : `background-color: ${props.theme.colors.white}`};

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: none;
    width: 350px;
    height: 260px;
    border-radius: ${props =>
      props.isEven ? '0px 130px 130px 0px' : '130px 0px 0px 130px'};
    justify-content: ${props => (props.isEven ? 'flex-end' : 'flex-start')};
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    width: 410px;
    height: 300px;
    border-radius: ${props =>
      props.isEven ? '0px 150px 150px 0px' : '150px 0px 0px 150px'};
  }

  &::after {
    content: '';

    position: absolute;
    z-index: -1;
    border-radius: 50%;
    @media screen and (${props => props.theme.devices.onlymobile}) {
      top: -15px;
      left: -15px;
    }

    width: calc(100% + 30px);
    height: calc(100% + 30px);

    @media screen and (${props => props.theme.devices.tablet}) {
      width: 300px;
      height: 300px;

      ${props =>
        props.isEven
          ? `
       top: -20px;
       left: none;
      right: -20px;
      `
          : `
       top: -20px;
      left: -20px;
      `};
    }

    ${props =>
      props.styles === 'dark'
        ? `background-color: ${props.theme.colors.lightBlue}`
        : `background-color: ${props.theme.colors.accent}`};
    @media screen and (${props => props.theme.devices.desktop}) {
      width: 340px;
      height: 340px;
    }
  }
`;

export const Picture = styled.picture`
  position: relative;
  display: flex;
  z-index: 0;
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

  @media screen and (${props => props.theme.devices.tablet}) {
    width: 100%;
    height: 260px;
    border-radius: ${props =>
      props.isEven ? '0px 130px 130px 0px' : '130px 0px 0px 130px'};
    justify-content: ${props =>
      props.isEven
        ? props.title === 'Desserts'
          ? 'flex-start'
          : 'flex-end'
        : props.title === 'Desserts'
        ? 'flex-end'
        : 'flex-start'};
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    height: 300px;
    border-radius: ${props =>
      props.isEven ? '0px 150px 150px 0px' : '150px 0px 0px 150px'};
  }
`;

export const Img = styled.img`
  display: block;
  ${props =>
    props.title === 'Desserts'
      ? 'width: 148px; height: 140px;'
      : `width: 178px; height: 100%;`};

  @media screen and (${props => props.theme.devices.tablet}) {
    ${props =>
      props.title === 'Desserts'
        ? 'width: 329px; height: 220px;'
        : `width: 274px; height: 100%;`};
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    ${props =>
      props.title === 'Desserts'
        ? 'width: 378px; height: 236px;'
        : `width: 316px; height: 100%;`};
  }
`;

// @media screen and (${props => props.theme.devices.tablet}) {

//  }

// @media screen and (${props => props.theme.devices.desktop}) {

//  }
