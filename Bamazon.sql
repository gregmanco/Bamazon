DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  product_name VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  department_name VARCHAR(30),
  -- Makes a sting column called "pet_name" --
  price INTEGER(10) NOT NULL,
  -- Makes an numeric column called "pet_age" --
  stock_quantity INTEGER(10) NOT NULL,
  -- Sets id as this table's primary key which means all data contained within it will be unique --
  PRIMARY KEY (item_id)
);

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

SELECT * FROM products;
3
SELECT stock_quantity FROM products WHERE item_id = 3;
