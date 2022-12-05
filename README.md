# Course Project Overview

In this project, we created a cocktail recommendation webpage that recommends cocktails based on users' preferences. More specifically, the user can choose prefered drinks by cocktail names, ingredients, or mixture of cocktail names and ingredients, and the webpage will provide cocktail details for the users. The frontend is a webpage where the users can input their preferences, and the most relevant cocktails will be listed with names, required ingredients and also preparation instructions. The backend is a recommendation system which takes the user inputs and returns a list of most relevant cocktails.

# Software Usage Tutorial Presentation

https://youtu.be/W7IxT6pR880

# File Structure
```
--- antd/: nodejs package for frondend
--- bartender/: for data collection
--- dataset/: preprocessed datasets
--- Documents/: project proposal and progress reports
--- experiments/: for data preprocessing and backend code experiments
--- img/
--- frondend/: frondend code
--- app.py: backend server
--- bartender_backend.py: recommendation system code

```

# Running Backend

## Env Requirements

We recommend use python virtual environment for better package control.
```
pip install -r requirements.txt
```

## Run Local Server
```
python app.py
```

Backend server is at localhost http://localhost:8080.

# Running Frontend 

## Env Requirements
Install nodejs: https://nodejs.org/en/

Navigate into ```frondend``` folder, and install dependencies:
```
cd frondend
npm install
```

**- Copy the folder ```antd``` into your ```frondend/node_modules``` folder and replace the current one** (This is because our antd uses an old version).

## Run Local Frontend
```
npm start
```
The website is running on localhost at:
```
http://localhost:3000
```

## Interact
Go to ```http://localhost:3000``` and simply click on the three different search buttons and search whatever you want (use full screen for better image display).

# Implementation Details

# Backend - Recommendation System

The backend is hosted using [flask](https://flask.palletsprojects.com/en/2.2.x/), a web development tool for python. It hosts a python backend server and consistantly listening for requests sent from the frontend. There are three different kinds of request functions: ```by_mix()```, ```by_name()```, and ```by_ingredients()```. Each function gets different kinds of user inputs and calls different recommendation systems.

## Get Recommendation

Use ```HTTP``` GET request to get the recommendation list from ```http://localhost:8080/by_mix``` for default recommendation (mixture of cocktail names and/or ingredients):

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

Alternatively, use ```HTTP``` GET request to get the recommendation list from ```http://localhost:8080/by_name``` to search by cocktail names:
```
{"user_input":"Long Island Tea"}
```

Or, use ```HTTP``` GET request to get the recommendation list from ```http://localhost:8080/by_ingredients``` to search by ingredients:
```
{"user_input": "lemon, gin"}
```

# Recommendation System 

The input for the recommendation system is a tabel looks like below:

The key information used in the recommendation system are: cocktail name, cocktail ingredients, and preparation instructions.

### Data Processing
-  First, all the stop words are removed from the ingredients. In addition, these wrods are also treated as stop words ```['oz', 'simple', 'dash', 'bsp', 'drops', "ml", "grams", "gram"]```.
- Second, Tf-idf-weighted document-term matrix will be calculated for all cocktails ingredients. 
- Third, a similarity matrix is calculated using the Tf-idf-weighted document-term matrix. Each entry records the cosine similarity score for two cocktails' ingredients.
- Similar process was done to get the similarity matrix for searching by name.

### Search by ingredients or names
- Takes the user input and follow the same data preprocessing steps above.
- User inputs are preprocessed and made into a `pseudo` drink
- The `pseudo` drink will be used to calculate the similarity between drinks in the database using TF-IDF weight matrix
- Backend then returns the top-rank drinks as a table to the front end for display

### Search by ingredients and names
- Takes the user input and follow the same data preprocessing steps above
- The user inputs will be use to calculate the similarity between both ingredient TF-IDF matrix and also the name TF-IDF matrix
- The results from the previous step will be merged and sorted
- Backend then returns the total top-rank drinks as a table to the front end for display




# Frontend - UI Webpage

The frontend is based on nodejs' framework, using React. For the frontend itself, it is a project. The website components layout are written in file App.js.

To communicate with the backend, I use REST API. Operations are directly based on HTTP methods, so that server doesn't need to parse extra things.

To design the buttons and forms on the website, Ant Design is deployed. You could simply browse Ant Design and modify your code to get the layout you want for your frontend.

# Teammember Contributions 

Xin Jin:
- Aquired and preprocessed the dataset into desired format (~3h)
- Designed and implemented the recommendation system backbone code(~7h)
- Integrated the recommendation system with the backend host (~5h)
- Host backend code on localhost (~5h)

Zhicong Fan:
- Collected dataset from webpages (~3h)
- Designed user-interaction page (~5h)
- Implemented the frontend backbone code (~8h)
- Integrated frontend and backend code (~5h)
