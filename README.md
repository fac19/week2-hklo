# FAC19 week 2 project

At [Founders and Coders](https://www.foundersandcoders.com/about/) coding bootcamp we are tasked every week with a different project. A MVP is built in 1.5 days by 4 developers that follow the Agile methodology. This website is our week 2 group project.

__Week 2 topic__: HTTP (API, fetch, promises).

See [week 2 schedule](https://founders-and-coders.gitbook.io/coursebook/week-2/schedule).

---

# HKLO API mash-up game

## INTRO
Movie mash-up is a game where the user is given a randomised GIF and has to select the correct movie out of 4 randomised choices that are displayed on the page.

![screenshot](screenshot.png)

### FAC19

## URL

https://fac19.github.io/week2-hklo/

## APIs Used
[The Movie DB](https://www.themoviedb.org/documentation/api)  
[GIPHY](https://developers.giphy.com/)

## Authors

- [Giovanna](http://github.com/glrta)
- [Hannah](http://github.com/hannahgooding)
- [Tom](http://github.com/tacotoemeck)
- [James](http://github.com/jamesj-0)

## User Journey
1. Page loads a random selection of 4 movies with titles and images
2. User has to select the correct movie that the GIF below the movie selection is related to
3. If the user clicks the correct movie, the GIF has a green filter that displays the text "correct". If the user clicks the incorrect movie, the GIF has a red filter that displays the text "incorrect". They have the opportunity to click through the other movies until they get the correct answer.
4. The user clicks the "I want more!" button to refresh the randomised selection of movies and play again

## User Stories

### Core stories

As a user, I want to:

- See an interesting mashup of different data
- Input information to change the displayed result
- View the app on all of my devices
- Since your app will be unique you will need to create your own user stories for more specific features.

### Stretch stories

- As an impatient user, I want to see some indication that data is loading
- As a confused user, I want to be told when something goes wrong

### Acceptance Criteria
- Query at least two APIs using fetch
- Dynamic content generated with JS
- A clearly defined user journey, documented in your readme
- A responsive, mobile-first design
- Ensure your app is accessible to as many different users as possible
- Try not to push API keys up to GitHub (since anyone can see them there)
