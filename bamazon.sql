DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(45) NULL,
  department_name VARCHAR (45) NULL,
	price DECIMAL (10,2) NULL,
	quantity INT NULL,
	PRIMARY KEY (item_id)
);



INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES 
(1, "DNA Test", "Health", 69.00, 786), 
(2, "Sneakers", "Fashion", 22.99, 20), 
(3, "Fabric Roll", "Sewing", 15.00, 200), 
(4, "French Press", "Kitchen", 19.99, 90), 
(5, "Dog Leash", "Pets", 13.25, 75), 
(6, "Snow Shovel", "Outdoor", 12.69, 300), 
(7, "Sunglasses", "Fashion", 4.00, 25), 
(8, "Lumin Chair", "Home", 48.45, 98), 
(9, "Textbook", "Books", 15.99, 35), 
(10, "Smoker Pit", "Outdoor", 13.99, 200);


-- DROP DATABASE IF EXISTS ramazon;

-- CREATE DATABASE ramazon;

-- USE ramazon;
-- DROP TABLE IF EXISTS groceries;
-- CREATE TABLE groceries (
--   item_id INT NOT NULL AUTO_INCREMENT,
--   product_name VARCHAR(45) NULL,
--   department_name VARCHAR (45) NULL,
--   price DECIMAL(10,2) NULL,
--   quantity INT NULL,
--   PRIMARY KEY (item_id)
-- -- );



-- UPDATE `bamazon`.`products` SET `product_name`='DNA Test', `department_name`='Health' WHERE `item_id`='1';
-- UPDATE `bamazon`.`products` SET `product_name`='Fabric Roll', `department_name`='Sewing' WHERE `item_id`='3';
-- UPDATE `bamazon`.`products` SET `product_name`='Retro Shoes' WHERE `item_id`='2';
-- UPDATE `bamazon`.`products` SET `product_name`='Smoker Pit ', `department_name`='Outdoor' WHERE `item_id`='10';
-- UPDATE `bamazon`.`products` SET `product_name`='Lumin Chair', `department_name`='Home' WHERE `item_id`='8';

-- UPDATE `bamazon`.`products` SET `department_name`='Outdoor' WHERE `item_id`='6';
-- UPDATE `bamazon`.`products` SET `department_name`='Fashion' WHERE `item_id`='7';
-- UPDATE `bamazon`.`products` SET `quantity`=? WHERE `item_id`=?;












-- INSERT INTO products (item_id, product_name, department_name, price, quantity)
-- VALUES (2, "Retro Mary Jane Shoes", "Fashion", 22.99, 20), 

-- INSERT INTO products (item_id, product_name, department_name, price, quantity)
-- VALUES (3, "White Gossamer Fabric Roll", "Arts, Crafts & Sewing", 15.00, 200), 

-- INSERT INTO products (flavor, price, quantity)
-- VALUES (4, "French Press", "Kitchen", 19.99, 90), 

-- INSERT INTO products (flavor, price, quantity)
-- VALUES (5, "Dog Leash", "Pet Supplies", 13.25, 75), 

-- INSERT INTO products (flavor, price, quantity)
-- VALUES (6, "Snow Shovel", "Household Supplies", 12.69, 300), 

-- INSERT INTO products (flavor, price, quantity)
-- VALUES (7, "Sunglasses", "Fashion Accessories", 4.00, 25), 

-- INSERT INTO products (flavor, price, quantity)
-- VALUES (8, "Kids Lumin Chair", "Home & Kitchen", 48.45, 98), 

-- INSERT INTO products (flavor, price, quantity)
-- VALUES (9, "Textbook", "Books", 15.99, 35), 

-- INSERT INTO products (flavor, price, quantity)
-- VALUES (10, "Smoker Pit Thermometer", "Garden & Outdoor", 13.99, 200);

-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("chocolate", 3.10, 120);

-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("strawberry", 3.25, 75);


















### Alternative way to insert more than one row





