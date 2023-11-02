import styled from '@emotion/styled';

export const Title = styled.h2`
  position: relative;
  margin-bottom: 320px;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  text-align: left;

  color: ${props =>
    props.styles === 'dark'
      ? props.theme.colors.white
      : props.theme.colors.primary};

  @media screen and (${props => props.theme.devices.tablet}) {
    margin-bottom: 70px;
    font-size: 70px;
    text-align: ${props => (props.styles === 'dark' ? 'right' : 'left')};
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    ${props =>
      props.styles === 'dark'
        ? 'left: 24px; background-image: url("https://res.cloudinary.com/dm3dq4juf/image/upload/v1697531016/WorkKava/dcors/dots_ffffff.svg"); transform: rotate(180deg);'
        : 'right: 34px; background-image: url("https://res.cloudinary.com/dm3dq4juf/image/upload/v1697531014/WorkKava/dcors/dots_7E7262.svg")'};
    background-size: contain;

    @media screen and (${props => props.theme.devices.tablet}) {
      display: block;
      width: 190px;
      height: 190px;
    }

    @media screen and (${props => props.theme.devices.desktop}) {
      width: 202px;
      height: 202px;
      ${props => (props.styles === 'dark' ? 'left: 15px;' : 'right: 15px; ')};
    }
  }
`;

export const Box = styled.div`
  position: relative;
  @media screen and (${props => props.theme.devices.tablet}) {
    display: flex;
    ${props =>
      props.styles !== 'dark'
        ? 'flex-direction: row-reverse;'
        : 'flex-direction: row;'}

    gap: 40px;
  }
`;

export const InfoBox = styled.div`
  color: ${props =>
    props.styles === 'dark'
      ? props.theme.colors.white
      : props.theme.colors.primary};
`;

export const Number = styled.p`
  position: absolute;
  ${props => props.styles === 'dark' && 'right: 0;'}
  top: -246px;

  font-family: Impact;
  font-size: 100px;
  line-height: 1;
  z-index: 1;

  @media screen and (${props => props.theme.devices.tablet}) {
    position: relative;
    font-size: 200px;
    margin-left: 40px;
    text-align: left;
    top: 0;
    margin-bottom: 30px;

    ${props =>
      props.styles === 'dark' && 'text-align: right; margin-right: 23px;'}
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin-bottom: 38px;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    width: 125px;
    height: 45px;

    bottom: 0;
    background: ${props =>
      props.styles === 'dark'
        ? props.theme.colors.accent
        : props.theme.colors.darkBeige};
    ${props =>
      props.styles === 'dark'
        ? '-webkit-box-shadow: 7px -6px 0px 0px rgba(126,114,98,1); -moz-box-shadow: 7px -6px 0px 0px rgba(126,114,98,1); box-shadow: 7px -6px 0px 0px rgba(126,114,98,1);'
        : '-webkit-box-shadow: 7px -6px 0px 0px rgba(206, 206, 206, 1); -moz-box-shadow: 7px -6px 0px 0px rgba(206, 206, 206, 1); box-shadow: 7px -6px 0px 0px rgba(206, 206, 206, 1);'}
    ${props => {
      if (props.id === '01') {
        return ` left: -16px;`;
      } else if (props.id === '02') {
        return ` left: -11px;`;
      } else if (props.id === '03') {
        return ` left: -9px;`;
      } else {
        return;
      }
    }};
    @media screen and (${props => props.theme.devices.tablet}) {
      width: 250px;
      height: 89px;
      bottom: 0;
      ${props => {
        if (props.id === '01') {
          return ` left: -40px;`;
        } else if (props.id === '03') {
          return ` left: -25px;`;
        } else {
          return;
        }
      }};

      ${props =>
        props.styles === 'dark'
          ? 'left: 150px; -webkit-box-shadow: 13px -11px 0px 0px rgba(126,114,98,1);-moz-box-shadow: 13px -11px 0px 0px rgba(126,114,98,1);box-shadow: 13px -11px 0px 0px rgba(126,114,98,1);'
          : '-webkit-box-shadow: 13px -11px 0px 0px rgba(206,206,206,1);-moz-box-shadow: 13px -11px 0px 0px rgba(206,206,206,1);box-shadow: 13px -11px 0px 0px rgba(206,206,206,1);'}
    }

    @media screen and (${props => props.theme.devices.desktop}) {
      bottom: 0;
    }
  }
`;

export const Description = styled.p`
  position: relative;
  margin-bottom: 70px;
  font-size: 20px;
  line-height: 1.5;

  @media screen and (${props => props.theme.devices.tablet}) {
    margin-bottom: 30px;
    font-size: 24px;
    line-height: 1.17;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    font-size: 30px;
    margin-bottom: 40px;
    line-height: 1.2;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: 0;

    ${props =>
      props.styles === 'dark'
        ? ' background-image: url("https://res.cloudinary.com/dm3dq4juf/image/upload/v1697531015/WorkKava/dcors/four_zigzags_ffffff.svg");'
        : ' background-image: url("https://res.cloudinary.com/dm3dq4juf/image/upload/v1697531015/WorkKava/dcors/four_zigzags_7E7262.svg")'};
    background-size: contain;

    @media screen and (${props => props.theme.devices.desktop}) {
      display: block;
      width: 188px;
      height: 188px;
      top: 0;

      ${props =>
        props.styles === 'dark' ? 'right: -190px;' : 'left: -190px;'};
    }
  }

  ${props =>
    props.styles === 'dark'
      ? `text-align: right; padding-right: 40px; border-right: 5px solid ${props.theme.colors.white};`
      : `text-align: left; padding-left: 40px; border-left: 5px solid ${props.theme.colors.primary}`}
`;

export const ImageBox = styled.div`
  position: absolute;
  top: -286px;
  ${props => (props.styles === 'dark' ? 'left: -24px;' : 'right: -24px;')}

  width: 100%;

  @media screen and (${props => props.theme.devices.tablet}) {
    position: static;
    display: flex;
    flex-shrink: 1;
    align-items: center;
    justify-content: center;
  }
`;

export const Picture = styled.picture`
  width: 244px;
  height: 262px;

  @media screen and (${props => props.theme.devices.tablet}) {
    width: 492px;
    height: 480px;
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    width: 680px;
    height: 540px;
  }
`;

export const Img = styled.img`
  display: block;
  width: 244px;
  height: 262px;
  ${props =>
    props.styles !== 'dark'
      ? 'margin-left: auto; border-radius: 134px 0px 0px 0px;'
      : ' margin-right: auto; border-radius: 0px 134px 0px 0px;'}
  box-shadow: 15px -15px 16px 0px rgba(0, 0, 0, 0.25);

  @media screen and (${props => props.theme.devices.tablet}) {
    width: 492px;
    height: 480px;
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    width: 680px;
    height: 540px;
  }
`;
