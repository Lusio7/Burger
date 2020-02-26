CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT auto_increment PRIMARY KEY,
    burger_name VARCHAR(255),
    devoured BOOLEAN,
    time_eaten TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);