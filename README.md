# MySQL-Burger-Application

Eat-da-burger

For this application to work properly you are going to need to run a database and provide a MySQL password to match your workbench. To make things easier, follow the steps.  

1- Go to db Directory and run sql file schema.sql in your MySQL to create a database and table. 
2- Still inside db Directory, run seeds.sql in your MySQL to insert values into your table. 
3- In your terminal, download node_modules for your dependencies by entering npm install. 

Overview:
This Program is a full MVC application in node.js interacting with MySQL as source of data. The first file to run is the server.js, which requires the dependencies necessary to run the application such as, express, body-parser, express-handlebars, method-override, and mysql. It connecting to port 3000 or any other port that is available. App first runs on the main HTML body as default layout using Handlebars.

Second file to run is the connection.js, which requires your password to retrieve the data from the db, then connecting to the database using basic MySQL connection standard. After connected it is exported to be used by orm.js file. But first, it passes again at the server which calls for the specific router inside the burgers-controllers.js file. Inside the controller, it then renders all the data information to the view directory which contains the index.html file to display all the database contents. Now it is connected to a localhost.

Open your browser on localhost:3000

Now inside the browser, you can interact with this application by adding products into it (more specificly, burgers, yummy!!). You notice that each burger on the left that has not been eaten yet has a button, that if clicked, it is going to restart the database and move that burger you have just clicked to devoured side, right side. Also, on the bottom there is an input section where you can enter your favorite burger and clicking the place order button to add it to the waiting to be devoured section, left side.

It is all happening inside your database as well. If you go back to your database, you notice the changes you have made to it. If not, you might need to refresh the database.
