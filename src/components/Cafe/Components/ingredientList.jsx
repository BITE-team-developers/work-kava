import React from 'react';

const IngredientList = ({ ingredients }) => {
  const ingredientArray = Object.entries(ingredients);

  return (
    <ul>
      {ingredientArray.map(([ingredient, amount]) => (
        <li key={ingredient}>
          {ingredient}: {amount}
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;