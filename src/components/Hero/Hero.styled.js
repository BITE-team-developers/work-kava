import styled from '@emotion/styled';
import { DarkSection } from 'components/App.styled';

export const SectionHero = styled(DarkSection)`
  padding-top: 180px;

  background: linear-gradient(
      90deg,
      rgba(27, 37, 63, 0.67) 56.77%,
      rgba(27, 37, 63, 0) 100%
    ),
    url('https://res.cloudinary.com/dm3dq4juf/image/upload/v1697012573/WorkKava/home/hero-mobil.png');
  background-repeat: no-repeat;
  background-color: #1b253f;
`;

export const MainText = styled.p`
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.5;
  text-align: left;
  margin-bottom: 50px;
`;

export const DescrText = styled.p`
  position: relative;
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  margin-bottom: 120px;
  padding-left: 40px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    content: '';
    height: 100%;
    width: 5px;
  }
`;
