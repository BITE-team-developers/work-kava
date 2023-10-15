import FastfoodItem from './FastfoodItem';

const FastfoodList = ({ items }) => {
  return (
    <ul>
      {items.map(fastfood => (
        <li>
          <FastfoodItem item={fastfood} />
        </li>
      ))}
    </ul>
  );
};

export default FastfoodList;
