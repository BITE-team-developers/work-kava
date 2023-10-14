import React from 'react';
import { IngredientsList, Dots, IngredientItem, Amount } from './Dish.styled';

const Ingredients = ({ ingredients, isEven, styles }) => {
  const ingredientArray = Object.entries(ingredients);

  return (
    <IngredientsList isEven={isEven} styles={styles}>
      {ingredientArray.map(([ingredient, amount]) => (
        <IngredientItem key={ingredient}>
          <span>{ingredient}</span> {amount !== '' && <Dots>..........</Dots>}
          <Amount>{amount}</Amount>
        </IngredientItem>
      ))}
    </IngredientsList>
  );
};

export default Ingredients;
