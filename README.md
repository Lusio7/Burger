# MySQL-Burger-Application

burger
Eat-da-burger

For this application to work properly you are going to need to run a database and provide a MySQL password. To make things easier, follow the steps. 1- Inside the burger Directory, or Main Directory, create a JavaScript file called key.js. 2- Inside the key.js file enter the following syntaxes. var key = { secret_key: "Your MySQL password goes here, inside the double quotes" }; module.exports = key.secret_key; 3- Go to db Directory and run sql file schema.sql in your MySQL to create a database and table. 4- Still inside db Directory, run seeds.sql in your MySQL to insert values into your table. 5- Almost forgot, in your terminal, download node_modules for your dependencies by entering npm install. 6- You are all set!

Overview This Program is a full MVC application on node.js interacting with MySQL as source of data. The first file to run is the server.js, which is requiring the dependencies necessaries to run the application such as, express, body-parser, express-handlebars, method-override, and mysql. It is connecting to port 3002 or any other port that is available. App first run on the main HTML body as default layout using Handlebars.

Second file to run is the connection.js, which require key.js file to retrieve the password, then connecting to the database using basic MySQL connection standard. After connected it is exported to be used by orm.js file. But first, it passes again at the server which calls for the specific router inside the burgers-controllers.js file. Inside the controller, it is then render all the data information to the view directory where contains the index.html file to display all the database contents. Now it is connected to a localhost on an id determined by your computer.

Open your browser on localhost:3000

Now inside the browser, you can interact with this application by adding products into it (more specific, burgers, yummy!!). You notice that each burger on the left that has not been eaten yet has a button, that if clicked, it is going to restart the database and move that burger you have just clicked to devoured side, right side. Also, on the bottom there is a input section where you can enter your favorite burger and clicking the place order button to add it to the waiting to be devour section, left side.

It is all happening inside your database as well. If you go back to your database, you notice the changes you have made to it. If not, you might need to refresh the database.