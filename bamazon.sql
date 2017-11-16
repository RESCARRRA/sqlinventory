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






