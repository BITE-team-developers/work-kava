import FastfoodItem from './FastfoodItem';

const FastfoodList = ({ items }) => {
  return (
    <ul>
      {items.map(fastfood => (
        <li key={fastfood.id}>
          <FastfoodItem item={fastfood} />
        </li>
      ))}
    </ul>
  );
};

export default FastfoodList;
