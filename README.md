# [Babis Burger](https://babisburger.herokuapp.com/) :hamburger:
Welcome to Babis Burger.

This full-stack web application allows the user to choose a burger they would like to eat. They can either `CHOW DOWN!` or if the burger didn't agree with them they can `THROW UP!`. If they really didn't like the burger they can choose to `DELETE` from the menu completely, but only if they `DIGEST` it first. Additionally, you can create and add your own burger into the Babis Burger Menu.

## Technical overview
This full-stack application utilizes the Model/View/Controller (MVC) design pattern in which the Controller serve as the interface to handle the logic and routing between Model or the application database core and View to dynamically render HTML content in response to the user/client requests. Specifically, the app is built with Node.js, Express.js, and Handlebars to handle the logic and to route the client requests to MySQL database using a homemade Object Relational Mapping (ORM) technique to retrive information to dynamically build HTML pages to display the content back to the client.  To run the server codes, the app is deployed live on Heroku.  If you wish to clone or download the code from GitHub to run on the localhost, make sure you uncomment out the connection for MySQL (use your own MySQL password) and comment out the JAWSDB connection code.

## Built with
* HTML5
* CSS3
* JavaScript
* jQuery
* Model View Controller (MVC)
* Object Relational Mapping (ORM)
* Express.js
    * HTTP Requests (GET, POST)
    * Routes and static content
    * Handlebars engine integration
* Node.js
    * Backend API calls
* Handlebars Templates and Layouts
* Node Package Manager (npm)
* Media queries
* MySQL/JawsDB
* Heroku deployment

## NPM Packages: 
* [Express] (https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node to handle routing.
* [Express-Handlebars] (https://www.npmjs.com/package/express-handlebars) - A view engine that utilizes logicless Mustache templating language for Express that keep the view and the code separated.
* [mysql] (https://www.npmjs.com/package/mysql) - A Node.js module driver for MySQL databases.
* [DotEnv](https://www.npmjs.com/package/dotenv) - Dotenv store your sensitive credentials and load in environment variables in .env file to merge into your process.env runtime variables. :closed_lock_with_key:



## Here is a preview of the app:

![](public/assets/img/babisburger.gif "gif")
