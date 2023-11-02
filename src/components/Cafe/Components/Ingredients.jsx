import React from 'react';
import { IngredientsList, Dots, IngredientItem, Amount } from './Dish.styled';

export const Ingredients = ({ ingredients, isEven, styles }) => {
  const gridList = [];

  for (const i in ingredients) {
    gridList.push(i, ingredients[i]);
  }

  return (
    <IngredientsList isEven={isEven} styles={styles}>
      {gridList.map((item, index) => (
        <IngredientItem key={index}>
          <p>
            {index % 2 === 0 && item}
            {index % 2 === 0 && item !== 'Milk*' && (
              <Dots> ................................</Dots>
            )}
          </p>
          {index % 2 !== 0 && <Amount>{item}</Amount>}
        </IngredientItem>
      ))}
    </IngredientsList>
  );
};
