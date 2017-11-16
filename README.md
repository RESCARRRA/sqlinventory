# Bamazon

## Overview

Amazon-like storefront app utilizing MySQL and Node.js. The app takes in orders from customers and deducts stock from the store's inventory per user request. The Customer View is operating and detailed below. I am in the process of completeing the MGMT version which will be equipped to track product sales across the store's departments and provides additional information about the inventory per manager input.


### Customer View

**Database**

- MySQL Database called `bamazon`created.

- Table inside of Bamazon database called `products` created and populated with 10 rows of mock data.

- Products table includes the folllowing columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * quantity (how much of the product is available in stores)

**Node App**

1.  Running the Node application entitled  `bamazonCustomer.js` will first display all of the items available for sale. 

2.  Users are then prompted with two messages (using npm `inquirer.js`)

   *  ID of the product they would like to buy.
   *  How many units of the product they would like to buy.

3.  Once the customer has placed the order, the application checks if the store has enough of the product to meet the customer's request.

4. If the store _does not_ have enough of the product, the app logs `Insufficient quantity!` and prevents the order from being processed.

5. If the store _does_ have enough of the product,  the customer's order is processed.
   
   * The SQL database is updated in workbench and terminal to reflect the remaining quantity.
   * The customer is shown the total cost of their purchase.

#### Video Guide
 ![Bamazon](https://github.com/rescarra/Bamazon/blob/master/gif-bamazon.gif "Bamazon")

### Technologies
> Javascript
>
> Node.js
>
> MySQL, MySQL Workbench
>
> Terminal / Command Line

 #### Dependencies
> [`node.js`](https://nodejs.org/en/)
>
> [`npm mysql`](https://www.npmjs.com/package/mysql)
>
> [`npm inquirer`](https://www.npmjs.com/package/inquirer)
>
> [[`npm cli-table`]](https://www.npmjs.com/package/cli-table)
> _or_
> [[`npm console.table`]](https://www.npmjs.com/package/console.table)
>
>[[`npm chalk`]](https://www.npmjs.com/package/chalk)

- - -

**Author** 

Ryn Escarra-Cypher [@RESCARRA](https://github.com/rescarra)

2017

[Code of Conduct](Bamazon/CODE_OF_CONDUCT.md)

