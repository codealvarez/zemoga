# Zemoga Test
This is the result for my Front/Back-end development test for Zemoga recruitment process. 

# Using Nodejs - React.JS
For this test I'm using the React.js framework for the front-end. I was using ReactJS a couple years ago, and my recruiter told me that is your main JS Framework, so I decided to create this app using ReactJS. Further I thing this is the most estable JS framework in this moment. My strength is Angular but I wanted to do my best in this test.  

## Using SASS
Using SASS as CSS transpiler to make an easier and optimized work for styling my web app.

# Using Google Cloud App Engine
I'm using the Google App Engine service with Firebase Functions, Firestore (NoSQL DB), Express.js (API)

## Firebase Fitestore
This is a NoSQL cloud database in Firebase Services. It uses Collections/documents/Collections format. So, I'm using the collection "people"to set my people data (showed in the main vote grid).

Inside each "people" document I set the votes resume and I created an inner collection named "votes" to save de detailed votes information (user and option). This also let me check if an user made more than 3 votes per box.

## Firebase Functions
This service helped me to create my REST API using Express.js to create the "userVotes" end-point.

## Firebase Hosting
With this service I made my files deploid of the build React.js result.

# Results

I've created descripttion for each requirement result:

## Layout HTML-CSS

- [x] Use media queries to adapt the layout in small screens. (comp not provided, so use your creativity).
    - I used the Material-UI system to build and set the comp of the elements when user resize the browser.

- [x] Non safe web font used: Lato
    - Font user for each element as Photoshop document indicates. I import the font in my [SASS style file](front/src/styles/_custom.scss), like this:
    `@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');`






