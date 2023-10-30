import { Link } from 'react-router-dom';
import { Svg } from '../../../SvgIcon/SvgIcon';
import { LogoWrapper } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/" aria-label="Home">
        <Svg icon="logo" w={201} h={46} />
      </Link>
    </LogoWrapper>
  );
};
