import { Link } from 'react-router-dom';
import {
  ContainerHeader,
  Item,
  LinkItem,
  LinkPhone,
  List,
  StyledHeader
} from './Header.styled';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState();

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
    console.log(sizeLogoWidth);
  };
  return (
    <StyledHeader>
      <ContainerHeader>
        <Link to="/">
          <Svg
            w={sizeLogoWidth}
            h={sizeLogoHeight}
            icon={'logo'}
            style={{ fill: '#fff' }}
          />
        </Link>
        {windowWidth >= 1024 ? (
          <>
            <nav>
              <List>
                <Item key="1">
                  <LinkItem to="/">Home</LinkItem>
                </Item>
                <Item key="2">
                  <LinkItem to="/cafe">Cafe</LinkItem>
                </Item>
                <Item key="3">
                  <LinkItem to="/fastfood">Fastfood</LinkItem>
                </Item>
                <Item key="4">
                  <LinkItem to="/coworking">Coworking</LinkItem>
                </Item>
              </List>
            </nav>
            <LinkPhone href="tel:+380970000000">
              <Svg w={32} h={32} icon={'phone'} style={{ fill: '#fff' }} />
              <p>097-000-00-00</p>
            </LinkPhone>
          </>
        ) : (
          <button type="button" onClick={handleOpenModal}>
            <Svg w={32} h={32} icon={'burger'} style={{ fill: '#fff' }} />
          </button>
        )}
      </ContainerHeader>
    </StyledHeader>
  );
};
