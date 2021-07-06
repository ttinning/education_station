# Education Station

## Synopsis

This app was completed by Cohort E49 for CodeClan's Professional Software Development course. The brief was to use create an educational app using technologies taught in the previous weeks - React, Javascript and MongoDB. In addition, we researched and used other librarires/tools to provide the functionality we designed (e.g. React Router, React DnD, Heroku for hosting). It was completed in a one week sprint by a team of six.

A list words on a specific topic is defined in the database, and APIs are then polled to fetch a definition, image and audio pronounciation for the word - this information is then used to create three simple games aimed at primary school aged students.

* Spelling game - identify the item in the image and spell it
* Audio game - listen to the word being pronounced and spell it
* Drag and drop game - drag the word onto the correct definition

APIs used:
* http://owlbot.info (image/definition)
* https://api.dictionaryapi.dev/api/v2/entries/en_GB/tree (audio)

## Usage
* Ensure NPM is installed on your local machine
* Request an API key from http://owlbot.info
* Clone the repository and open it in terminal
* Change to the server directory and run `npm install` to install all pre-requisites (listed in package.json)
* Run `npm run seeds` to load seed data into MongoDB
* Run `npm run server:dev` to start the server
* Verify it is working by browsing to http://localhost:5000/api/topics or http://localhost:5000/api/accounts and verifying data appears
* Open a new terminal window, then change to the client directory
* Run `npm install` to install all pre-requisites (this may take a few minutes to complete)
* In the client/services folder, rename auth.js.template to auth.js and insert your owlbot API key
* Run `npm start` to start the client application
* Verify it is running correctly by browsing to http://localhost:3000


