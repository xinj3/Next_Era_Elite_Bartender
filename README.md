# Course Project

Git Repo for CS410 final project team `Next_Era_Elite_Bartender`

# Backend

## Env Requirements

```
pip install -r requirements.txt
```

## Run Local Server
```
python app.py
```

Backend server is at localhost http://localhost:8080.

## Get Recommendation

Use ```HTTP``` GET request to get the recommendation list from ```http://localhost:8080/by_mix``` for default recommendation:

Send user input using the following json syxtax:
```
{"user_input":"Long Island Tea, lemon, gin"}
```

Sample Output:

```
{
    "name": ["LONG ISLAND LIMONCELLO MARTINI", "3-MILE LONG ISLAND ICED TEA", "LONG ISLAND TEA", "LONG ISLAND ICED TEA", "RADIOACTIVE LONG ISLAND ICED TEA"], 

    "all_ingredients": ["1 oz Hangar 1 Buddha's Hand Citron Vodka, 1 oz Luxardo Limoncello, .75 oz Fresh Lemon Juice, .25 oz Monin Cane Syrup,Lemon Wheel", "Lemon, Bitters, Sweet and sour, Coca-Cola, Vodka, Triple sec, Tequila, Light rum, Gin, ," "Coca-Cola, Lemon, Tequila, Gin, Light rum, Vodka, ,", "Lemon peel, Coca-Cola, Gin, Light rum, Tequila, Vodka, ,", "Malibu rum, Midori melon liqueur, Chambord raspberry liqueur, Triple sec, Gin, Tequila, Vodka, Rum, ,"], 
    
    "preparation": ["Served up and finished with a lemon wheel.", "Fill 14oz glass with ice and alcohol. Fill 2/3 glass with cola and remainder with sweet & sour. Top with dash of bitters and lemon wedge.", "Combine all ingredients (except cola) and pour over ice in a highball glass. Add the splash of cola for color. Decorate with a slice of lemon and serve.", "Mix all contents in a highball glass and sitr gently. Add dash of Coca-Cola for the coloring and garnish with lemon or lime twist.", "Pour all ingredients over ice in a very tall glass. Sip cautiously."],

    "image": ["img/default_img.png", "http://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg", "http://www.thecocktaildb.com/images/media/drink/ywxwqs1439906072.jpg", "http://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg", "http://www.thecocktaildb.com/images/media/drink/rdvqmh1503563512.jpg"]}
```

Alternatively, use ```HTTP``` GET request to get the recommendation list from ```http://localhost:8080/by_name``` to search by cocktail name. 
```
{"user_input":"Long Island Tea"}
```

Or, use ```HTTP``` GET request to get the recommendation list from ```http://localhost:8080/by_ingredients``` to search by ingredients
```
{"user_input": "lemon, gin"}
```

# Frontend 

## Env Requirements
Install nodejs: https://nodejs.org/en/

Since node modules are too large to be uploaded, users need to create their own nodejs project, running (the project is created in a folder called ```test```):
```
npx create-react-app test
```
**Copy the files and folders ```public, src, package.json, package-lock.json``` into your created project ```test``` folder**
```
rm -r test/public & cp -r public test/public 
rm -r test/src & cp -r src test/src
rm test/package.json & cp package.json test/package.json
rm test/package-lock.json & cp package-lock.json package-lock.json
```

**Copy the folder ```antd``` into your ```test/node_modules``` folder**
```
rm -r test/node_modules/antd & cp -r antd test/node_modules/antd
```

Navigate into ```test``` folder:
```
cd test
```
```
npm add antd
```

## Run Local Frontend
```
npm start
```
The website is running on localhost at:
```
http://localhost:3000
```

## Interact
Simply click on the three different search buttons and search whatever you want.

## Result
Don't drink too much!
