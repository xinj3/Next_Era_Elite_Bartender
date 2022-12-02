const SERVER_ORIGIN = 'http://localhost:8080';

 
const searchDrinkByIdUrl = `${SERVER_ORIGIN}/by_name`;
 
export const searchDrinkByName = async (drinkName) => {
  const data = {
    "user_input": drinkName
  }
  const response = await fetch(searchDrinkByIdUrl, {
    // mode: 'no-cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  if (response.status !== 200) {
    throw Error('Fail to find the drink');
  }
  return await response.json();
}

const searchDrinkByIngredientUrl = `${SERVER_ORIGIN}/by_ingredients`;
 
export const searchDrinkByIngredient = async (ingredientName) => {
  const data = {
    "user_input": ingredientName
  }
  const response = await fetch(searchDrinkByIngredientUrl, {
    // mode: 'no-cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  if (response.status !== 200) {
    throw Error('Fail to find the drink');
  }
  return await response.json();
}

const searchMixUrl = `${SERVER_ORIGIN}/by_mix`;
 
export const searchMix = async (MixName) => {
  const data = {
    "user_input": MixName
  }
  const response = await fetch(searchMixUrl, {
    // mode: 'no-cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  if (response.status !== 200) {
    throw Error('Fail to find the drink');
  }
  return await response.json();
}

