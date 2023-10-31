import { FastfoodItem } from './FastfoodItem';
import { Item, ItemsList } from './FastfoodList.styled';

export const FastfoodList = ({ items }) => {
  return (
    <ItemsList>
      {items.map(fastfood => (
        <Item key={fastfood.id}>
          <FastfoodItem item={fastfood} />
        </Item>
      ))}
    </ItemsList>
  );
};
