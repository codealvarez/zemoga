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

[Web app link](https://zemoga-codealvarez.web.app/)

I've created descripttion for each requirement result:

## Layout HTML-CSS

- [x] Use media queries to adapt the layout in small screens. (comp not provided, so use your creativity).
    - I used the Material-UI system to build and set the comp of the elements when user resize the browser.

- [x] Non safe web font used: Lato
    - Font user for each element as Photoshop document indicates. I import the font in my styles file, like this:
    `@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');`

- [x] Use media queries to adapt the layout in small screens. (comp not provided, so use your creativity).
    - I used the Material-UI system to build and set the comp of the elements when user resize the browser.

- [x] You can rely on preprocessors / transpilers such as LESS/SASS or any sort of CSS framework if you want. (Pure CSS is also an option but you must argue the benefits)
    - You can check my [SASS style file](front/src/styles/custom.scss)

- [x] Clicking on one of the links of the main menu redirects the user to the other pages (we only provide a comp for the main page so just use white pages with the title section on them).
    - You can click in each sections of my web app, like [Web app link](https://zemoga-codealvarez.web.app/how-it-works). Additional, I've a 404 page to handle the not-found content [Web app link](https://zemoga-codealvarez.web.app/anypage)


## Layout HTML-CSS

- [x] Create a data feed in JSON format with the structure that best suits the content for the voting boxes and populate the initial content from it.
    - Local data feed created in JSON format, located [SASS style file](front/src/pages/home/data/people.js).
    - I used this file to render each box in [my component](https://github.com/codealvarez/zemoga/blob/layout/front/src/pages/home/components/Rulings.js)

- [x] The user can select either thumb up or thumb down button on each of the boxes (when the button is selected, a white border is displayed as featured in the comp)
    - Feature completed

- [x] Once the user clicks on the "Vote now” button, a message is displayed saying “Thank you for voting!” as well as a vote again button to vote again.
    - Feature completed

- [x] There is no limit in the amount of votes
    - Feature completed

- [x] Percentage bars change depending on the up/or downs votes.
    - Feature completed
    
- [x] Think on a way to persist the current votes so if the page is refreshed the data is not lost. (could be local in the browser or server side if you have those skills)
    - Data stored in Firestore collections

- [x] We want to see your vanilla/DOM JS skills so please do not use jQuery.
    - I use a combinaiton o ReactDOM and traditional vanilla to get some element styles [Example](https://github.com/codealvarez/zemoga/blob/8dee80249a2ba25fc5a698b8eef8c2e08c06ebb7/front/src/pages/home/components/Rulings.js#L156).

- [x] You can solve this part with either full Vanilla JS and some patterns, OR any sort of framework such as Angular, React, Vuejs, Ember, etc. Use the one you feel more confortable with.
    - Reactjs framework used

- [] Bonus points: Some sort of Test (E2E, BDD, etc)
    - I was planning to use Cypress to make the tests, but I've not very experience with it and I the time is finishing :(

## NodeJS

- [x] Activate the Login/Signup link in the main menu by showing a basic login dialog.
    - Firebase authentication system implemented successfully. I've used the reactfire complement to handle the user managment (login/register) - [Register implementation ](https://github.com/codealvarez/zemoga/blob/8dee80249a2ba25fc5a698b8eef8c2e08c06ebb7/front/src/components/Header.js#L107)

- [x] If the user is already logged in, this link should be switched to a logout link.
    - [Implemented OK ](https://github.com/codealvarez/zemoga/blob/8dee80249a2ba25fc5a698b8eef8c2e08c06ebb7/front/src/components/Header.js#L253)

- [x] The login box presents a basic user/pwd form and a button to switch to a signup (registration form with user, pwd, age and marriage status).
    - [Register form](https://github.com/codealvarez/zemoga/blob/8dee80249a2ba25fc5a698b8eef8c2e08c06ebb7/front/src/components/Header.js#L205)

- [x] Persist the user data in the server side.
    - Data stored y firebase collection (users) [Evidence](https://firebasestorage.googleapis.com/v0/b/zemoga-codealvarez.appspot.com/o/result%2FCaptura%20de%20Pantalla%202021-02-10%20a%20la(s)%202.17.26%20p.%C2%A0m..png?alt=media&token=c68e813c-04a2-421e-9b59-d1c090bf6e2f)

- [x] Only logged in users can vote. (maximum 3 votes x box x user), and votes are persisted per user.
    - Total votes por user calculated and restricted

- [x] Create the authentication system and an API with CRUD operations that allows to modify the user information.
    - API handled with Firebase auth and firestore services, in this case, access to this data is easier without API, yous with Firebase library

- [x] Create an API endpoint that shows votes x user.
    - Endpoint created with NodeJs/Javascript method and deployed under Firebase Functions public service. 
    - Please refer the [API documentation](https://documenter.getpostman.com/view/8999876/TW77gigb)

- [x] For this part you don't need to apply fancy styles. Just raw boxes and forms.
    - Done

## Delivery

I'm web and mobile apps developer. I'm working with it 10 years ago. In this momment the mobile app side is the more used in my time. I have experience using AngularJS, AngularIO, React, React Native, Flutter, Cordova, PHP, MySQL. I'm pasionated for details and good working, I try to be as organized as possible with my work and documentation.

I hope you like my test result and my profile!






