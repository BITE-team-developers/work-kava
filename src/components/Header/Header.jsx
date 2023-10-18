import { Link } from 'react-router-dom';
import {
  ContainerHeader,
  Item,
  LinkItem,
  LinkPhone,
  List,
  StyledHeader,
  Wrapper
  // WrapperPhone
} from './Header.styled';
import { Svg } from 'components/SvgIcon/SvgIcon';

export const Header = () => {
  const flot = window.innerWidth;
  const handleOpenModal = () => {
    console.log('modal');
  };
  return (
    <StyledHeader>
      <ContainerHeader>
        <Link to="/">
          <Svg w={201} h={46} icon={'logo'} style={{ fill: '#fff' }} />
        </Link>
        {flot > 1044 ? (
          <Wrapper>
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
          </Wrapper>
        ) : (
          <button type="button" onClick={handleOpenModal}>
            <Svg w={201} h={46} icon={'burger'} style={{ fill: '#fff' }} />
          </button>
        )}
      </ContainerHeader>
    </StyledHeader>
  );
};
