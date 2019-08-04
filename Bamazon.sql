-- Drops the bamazon_db if it exist currently. --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates new database called bamazon_db --
CREATE DATABASE bamazon_db;
-- Iniates use of the bamazon_db
USE bamazon_db;
-- Creates a table called products
CREATE TABLE products (
  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "product_name" which cannot contain null --
  product_name VARCHAR(30) NOT NULL,
  -- Makes a string  column called "department_name" which cannot contain null --
  department_name VARCHAR(30),
  -- Makes a numeric column called "price" which cannot be null --
  price INTEGER(10) NOT NULL,
  -- Makes an numeric column called "stock_quantity" --
  stock_quantity INTEGER(10) NOT NULL,
  -- Sets id as this table's primary key which means all data contained within it will be unique --
  PRIMARY KEY (item_id)
);
-- Inserts values into the products table --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bug Assault", "Toys", 40, 10),
("Interstellar DVD", "Movies", 20, 20),
("Poland Spring 24pack", "Food", 5, 50),
("Lucky Charms", "Food", 5, 20),
("iPhone", "Electronics", 1000, 10),
("Drone", "Electronics", 220, 5),
("Paw Patrol Figurine", "Toys", 5, 20),
("Holes", "Books", 5, 20),
("Outsiders", "Books", 5, 20),
("Old School", "Movies", 10, 12);
-- Select ALL from products table. -- 
SELECT * FROM products;

