# STEP ONE: INITIAL PROJECT IDEAS

## Idea #1: Recipe App
### API: https://spoonacular.com/food-api 
- User will be able to sign up and log in
- User will be able to bookmark recipes
- User will be able to search for recipes (GET https://api.spoonacular.com/recipes/complexSearch) -> advanced filtering and ranking (searching by query, by ingredients, and by nutrients into one endpoint),
- User will be able to get recipe information (GET https://api.spoonacular.com/recipes/{id}/information),
- User will be able to search recipe by ingredients (GET https://api.spoonacular.com/recipes/findByIngredients),
- User will be able to get random recipes (GET https://api.spoonacular.com/recipes/random)

## Idea #2: Pokemon App Game
### API: https://pokeapi.co/ 
- User will be able to sign up and log in
- User will be able to review all Pokemon in the database and look through each Pokemon details
- User will be able to enter random battles
- User will be able to update their profile

## Idea #3: Bored App
### API: https://www.boredapi.com/ 
- User will be able to sign up and log in
- User will be able to search for an activity based on type, price, accessibility, or random.
- User will be able to up vote or down vote an activity, bookmark the one they like. 

<br>

# STEP TWO: PROJECT PROPOSAL - POKEMON APP
1. What tech stack will you use for your final project?
    > React and Node

2. Is the front-end UI or the back-end going to be the focus of your project? Or are you going to make an evenly focused full-stack application?
    > Evenly focused full-stack application

3. Will this be a website? A mobile app? Something else?
    > Website

4. What goal will your project be designed to achieve?
    > An application where users can sign up, log in, enter a random battle, and check out all Pokemon available.

5. What kind of users will visit your app? In other words, what is the demographic of your users?
    > Pokemon fans or someone just like to play a random game, from kids to young and middle age adults. 

6. What data do you plan on using? How are you planning on collecting your data? You may have not picked your actual API yet, which is fine, just outline what kind of data you would like it to contain. You are welcome to create your own API and populate it with data. If you are using a Python/Flask stack are required to create your own API.
    > Users data <br>
    > Pokemon data: base experience, photo url, types, and stats <br>

7. In brief, outline your approach to creating your project (knowing that you may not know everything in advance and that these details might change later). Answer questions like the ones below, but feel free to add more information: 
    - a. What does your database schema look like? 
        > Users: id, first name, last name, username, password, email <br>

    - b. What kinds of issues might you run into with your API? This is especially important if you are creating your own API, web scraping produces notoriously messy data.
        > User might not be able to sign up or log in <br>
        > User might not be able to enter battle <br>
        > User might not be able to see any Pokemon in the system

    - c. Is there any sensitive information you need to secure?
        > User password (token) for authentication and authorization

    - d. What functionality will your app include? 
        > Log in, sign up, list of Pokemon, enter random battle, update user's profile

    - e. What will the user flow look like? 
        > User sign up then log in <br>
        > Look through Pokedex and details on each Pokemon <br>
        > Enter random battles

    - f. What features make your site more than a CRUD app? What are your stretch goals?
        > Send an email welcome user when they sign up. 


