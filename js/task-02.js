const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

// const ingredientEl = ingredients.map(ingredient => {
//   const item = document.createElement('li');

//   item.textContent = ingredient;

//   console.log(item);
//   return item;
// });

const makeIngredient = ingredients => {
  return ingredients.map(ingredient => {
    const item = document.createElement('li');

    item.textContent = ingredient;

    return item;
  });
};

const ingredientEl = makeIngredient(ingredients);

ingredientsEl.append(...ingredientEl);
