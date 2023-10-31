import { Link } from 'react-router-dom';
import {
  ButtonStyled,
  ContainerHeader,
  LinkPhone,
  StyledHeader
} from './Header.styled';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { useEffect, useState } from 'react';
import { ModalNav } from './ModalNav';
import { Navigation } from './Navigation';

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState();
  const [modalHeader, setModalHeader] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sizeLogoWidth = windowWidth >= 1440 ? 201 : 150;
  const sizeLogoHeight = windowWidth >= 1440 ? 46 : 32;
  const handleOpenModal = () => {
    setModalHeader(true);
  };
  const handleClosedModal = () => {
    setModalHeader(false);
  };

  if (modalHeader) {
    return <ModalNav action={handleClosedModal} />;
  }
  return (
    <StyledHeader>
      <ContainerHeader>
        <Link to="/" aria-label="Home">
          <Svg
            w={sizeLogoWidth}
            h={sizeLogoHeight}
            icon={'logo'}
            aria-label="logotype work kava, go home"
          />
        </Link>
        {windowWidth >= 1024 ? (
          <>
            <Navigation />
            <LinkPhone className="phone" href="tel:+380970000000">
              <Svg w={32} h={32} icon={'phone'} />
              097-000-00-00
            </LinkPhone>
          </>
        ) : (
          <ButtonStyled
            type="button"
            onClick={handleOpenModal}
            aria-label="menu"
          >
            <Svg w={32} h={32} icon={'burger'} />
          </ButtonStyled>
        )}
      </ContainerHeader>
    </StyledHeader>
  );
};
