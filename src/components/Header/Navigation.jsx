import { Item, LinkItem, List } from './Header.styled';

export const Navigation = ({ action }) => {
  return (
    <nav>
      <List>
        <Item key="1">
          <LinkItem to="/" onClick={action}>
            Home
          </LinkItem>
        </Item>
        <Item key="2">
          <LinkItem to="/cafe" onClick={action}>
            Cafe
          </LinkItem>
        </Item>
        <Item key="3">
          <LinkItem to="/fastfood" onClick={action}>
            Fastfood
          </LinkItem>
        </Item>
        <Item key="4">
          <LinkItem to="/coworking" onClick={action}>
            Coworking
          </LinkItem>
        </Item>
      </List>
    </nav>
  );
};
