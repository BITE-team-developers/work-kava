import { Link } from 'react-router-dom';
import { Item, List, StyledHeader, StyledNav, Wrapper } from './Header.styled';

export const Header = () => {
  const flot = window.innerWidth;
  return (
    <StyledHeader>
      <p href="#" lang="en">
        Work kava
      </p>
      {flot > 1044 ? (
        <Wrapper>
          <StyledNav>
            <List>
              <Item key="1">
                <Link>Home</Link>
              </Item>
              <Item key="2">
                <Link>Cafe</Link>
              </Item>
              <Item key="3">
                <Link>Fastfood</Link>
              </Item>
              <Item key="4">
                <Link>Coworking</Link>
              </Item>
            </List>
          </StyledNav>
          <p href="tel:+380970000000">097-000-00-00</p>
        </Wrapper>
      ) : (
        <p>button</p>
      )}
    </StyledHeader>
  );
};
