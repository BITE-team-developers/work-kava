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
              <Item>Home</Item>
              <Item>Cafe</Item>
              <Item>Fastfood</Item>
              <Item>Coworking</Item>
            </List>
          </StyledNav>
          <p class="mobile-menu__tell" href="tel:+380970000000">
            097-000-00-00
          </p>
        </Wrapper>
      ) : (
        <p>button</p>
      )}
    </StyledHeader>
  );
};
