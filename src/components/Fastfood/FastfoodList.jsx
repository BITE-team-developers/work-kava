import FastfoodItem from './FastfoodItem';
import { Item, ItemsList } from './FastfoodList.styled';

const FastfoodList = ({ items }) => {
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

export default FastfoodList;
