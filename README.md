# Mars Dashboard

### Big Picture

The aim of this project is to create a Mars rover dashboard that consumes the NASA API. The dashboard will allow the user to select which rover's information they want to view. Once they have selected a rover, they will be able to see the most recent images taken by that rover, as well as important information about the rover and its mission. 

### Skills used
- plain javascript
- functional programming
- Immutable.js
- mutation observers
- build React style SPA without using React framework !!!
- reshaping, and accessing information from complex API responses using pure functions and iterating over.
- recursion
- pure functions
- dynamic event listeners

# How to run this project locally

- Clone this repo to your local
- First run `npm install` in root folder

## Client
- Build your client using webpack prod config by running below command
  `npm run build-prod`

  This should create a `dist` folder with all the artefacts

## Server
- create `.env` file inside `./src/server`
- enter API_KEY for NASA API as below:
```
API_KEY='<YOUR_API_KEY>'
```
- Now, switch your current directory to ./src/server and run `node index.js`
- You should see the message on your server console as
`Example app listening on port 3000!`
- Now, go to browser and enter `https:localhost:3000`

## How to get NASA API Key

you'll need a NASA developer API key in order to access the API endpoints. To do that, go here: https://api.nasa.gov/. If you want to simply look around at what api endpoints NASA offers, you can use their provided DEMO_KEY to do this.


## Project Features

- UI show shows the following:

- A gallery of the most recent images sent from each mars rover
- The launch date, landing date, name and status along with any other information about the rover
- A selection bar for the user to choose which rover's information they want to see
- UI is responsive.
- UI provides a way to dynamically switch the UI to view one of the three rovers 

## Technical aspects

This project is developed using plain javascript with functional programming style. It uses
- only pure functions
- at least one Higher Order Function
- the array method `map`
- the ImmutableJS library

### Backend
- built with Node/Express
- makes successful calls to the NASA API
- uses pure functions to do any logic necessary
- hides any sensetive information from public view (In other words, use your dotenv file)

### Future enhancements

- More NASA APIs can be integrated



