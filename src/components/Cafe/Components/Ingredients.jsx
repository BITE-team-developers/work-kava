import React from 'react';
import { IngredientsList, Dots, IngredientItem, Amount } from './Dish.styled';

const Ingredients = ({ ingredients, isEven, styles }) => {
  const gridList = [];

  for (const i in ingredients) {
    gridList.push(i, ingredients[i]);
  }

  return (
    <IngredientsList isEven={isEven} styles={styles}>
      {gridList.map((item, index) => (
        <IngredientItem key={index}>
          {index % 2 === 0 && item}
          {index % 2 === 0 && item !== 'Milk*' && (
            <Dots> ................................</Dots>
          )}
          {index % 2 !== 0 && <Amount>{item}</Amount>}
        </IngredientItem>
      ))}
    </IngredientsList>
  );
};

export default Ingredients;


