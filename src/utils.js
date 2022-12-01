const SERVER_ORIGIN = 'http://localhost:8080';

 
const searchDrinkByIdUrl = `${SERVER_ORIGIN}/by_name`;
 
export const searchDrinkByName = (drinkName) => {
  const data = {
    "user_input": drinkName
  }
  return fetch(searchDrinkByIdUrl, {
    // mode: 'no-cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to find the drink');
    }
    return response.json();
  })
}

const searchDrinkByIngredientUrl = `${SERVER_ORIGIN}/by_ingredients`;
 
export const searchDrinkByIngredient = (ingredientName) => {
  const data = {
    "user_input": ingredientName
  }
  return fetch(searchDrinkByIngredientUrl, {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to find the drink');
    }
    return response.json();
  })
}

const getRecommendedItemsUrl = `${SERVER_ORIGIN}/`;
 
export const getRecommendations = (drinkName, ingredientName) => {
  const data = {
    "user_input": drinkName, ingredientName
  }
  return fetch(getRecommendedItemsUrl, {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to find the drink');
    }
    return response.json();
  })
}

