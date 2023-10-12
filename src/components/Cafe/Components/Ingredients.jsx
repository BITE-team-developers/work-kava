import React from 'react';
import { IngredientsList, Dots, IngredientItem, Amount } from './Dish.styled';

const Ingredients = ({ ingredients, isEven }) => {
  const ingredientArray = Object.entries(ingredients);

  return (
    <IngredientsList isEven={isEven}>
      {ingredientArray.map(([ingredient, amount]) => (
        <IngredientItem key={ingredient}>
          {ingredient} <Dots>..........</Dots> <Amount>{amount}</Amount>
        </IngredientItem>
      ))}
    </IngredientsList>
  );
};

export default Ingredients;
