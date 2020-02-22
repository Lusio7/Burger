-- Drops the burger_db if exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burger_db" database --
CREATE DATABASE burgers_db;


CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean NOT NULL,
	PRIMARY KEY (id)
);

SELECT * FROM burgers;



INSERT INTO burgers (burger_name, devoured) VALUES ('', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('', true);