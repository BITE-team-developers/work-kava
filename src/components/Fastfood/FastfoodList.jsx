import FastfoodItem from './FastfoodItem';
import { ItemsList } from './FastfoodList.styled';

const FastfoodList = ({ items }) => {
  return (
    <ItemsList>
      {items.map(fastfood => (
        <li key={fastfood.id}>
          <FastfoodItem item={fastfood} />
        </li>
      ))}
    </ItemsList>
  );
};

export default FastfoodList;
