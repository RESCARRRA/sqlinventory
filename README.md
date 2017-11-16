# Node.js & MySQL

## Overview

For this assignment, I created an Amazon-like storefront with MySQL and Node.js. The app takes in orders from customers and deducts stock from the store's inventory per user request. I started one of the bonus challenges wherein the MGMT app tracks product sales across the store's departments and provides additional information about the inventory per the manager's input.


## Instructions

### Challenge #1: Customer View (Components)

#### Video Guide
![alt text](video-bamazon.mov "Bamazon")

- MySQL Database called `bamazon`.

- Table inside of Bamazon database called `products`.

- Products table includes the folllowing columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * quantity (how much of the product is available in stores)

-  Running the Node application entitled  `bamazonCustomer.js` will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

- Users are then prompted with two messages (using npm `inquirer.js`)

   *  ID of the product they would like to buy.
   *  How many units of the product they would like to buy.

7. Once the customer has placed the order, the application checks if the store has enough of the product to meet the customer's request.

   * If not, the app logs a phrase like `Insufficient quantity!`, and prevents the order from going through.

8. However, if the store _does_ have enough of the product,  the customer's order is processed.
   * The SQL database is updated in workbench and terminal to reflect the remaining quantity.
   * The customer is shown the total cost of their purchase.

- - -


