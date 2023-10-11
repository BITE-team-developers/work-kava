import IngredientList from './ingredientList';

const Dish = ({ data: { name, ingredients, price } }) => {

  const imageName = name.toLowerCase().replace(/ /g, '-');
  return (
    <li>
      <img
        src={`https://res.cloudinary.com/dm3dq4juf/image/upload/v1697007040/WorkKava/cafe/${imageName}.png`}
        alt={name}
      />
      <h3>{name}</h3>
      <IngredientList ingredients={ingredients} />
      <p>{price}</p>
    </li>
  );
};

export default Dish;
