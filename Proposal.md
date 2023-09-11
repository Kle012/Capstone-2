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
- User will be able to search Pokemon based on name or id, the result will include stats and types. Once the user choose the Pokemon, they will enter a battle with a random Pokemon (the one with higher base_experience will win). The results of the battle will be recorded and user can view it later in their personal profile.
- User can also vote up or down for a Pokemon battle. 

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
    > An application where users can sign up, log in, search for Pokemon, enter a battle, view records of battles, upvote or downvote a Pokemon battle.

5. What kind of users will visit your app? In other words, what is the demographic of your users?
    > Pokemon fans or someone just like to play a random game, from kids to young and middle age adults. 

6. What data do you plan on using? How are you planning on collecting your data? You may have not picked your actual API yet, which is fine, just outline what kind of data you would like it to contain. You are welcome to create your own API and populate it with data. If you are using a Python/Flask stack are required to create your own API.
    > Users data <br>
    > Pokemon data: base experience, photo url, types, and abilities effect <br>
    > Post data

7. In brief, outline your approach to creating your project (knowing that you may not know everything in advance and that these details might change later). Answer questions like the ones below, but feel free to add more information: 
    - a. What does your database schema look like? 
        > Users: id, first name, last name, username, password, email <br>
        > Favorite: user id, pokemon id, battle id <br>
        > Battle: id, pokemon id (selected pokemon vs enemy pokemon), user id, votes <br>
        > Winner: pokemon id

    - b. What kinds of issues might you run into with your API? This is especially important if you are creating your own API, web scraping produces notoriously messy data.
        > User might not be able to sign up or log in <br>
        > User might not find the Pokemon they were looking for <br>
        > User might not be able to enter battle <br>
        > User might not be able to vote for a Pokemon or a battle

    - c. Is there any sensitive information you need to secure?
        > User password (token) for authentication and authorization

    - d. What functionality will your app include? 
        > Log in, sign up, search, battle, vote 

    - e. What will the user flow look like? 
        > User sign up then log in <br>
        > Search for their Pokemon, enter a random battle <br>
        > Vote for Pokemon battles

    - f. What features make your site more than a CRUD app? What are your stretch goals?
        > Send an email welcome user when they sign up. 


