# Project Name

Check in Survey!

## Start up
run `npm install`
use 2 terminals to run `npm run server` and `npm run client`
That should set up your client interface. 

for the database you will need to create a database named `prime_feedback`.
Then there's a database.sql with commands to copy/paste inside postico(and execute) to create a compatable database for the project.

## Description

Your project description goes here. What problem did you solve? How did you solve it?

I was asked to create a small survey that checked in on people to see how they were handling coursework/ how they were doing emotionally.
I ended up making an app that used routing technology to linearly move the user through the application page by page until they finished. All of this information is stored into a database with an administrator page to easily access the information. Some quality of life would be the conditional rendering on the nav bar and also the ability to edit all answers on the review page. 
Technologies used for this include: React, jsx, redux, react-redux, react-router-dom, express, pg, pool, axios, and Material-ui. 