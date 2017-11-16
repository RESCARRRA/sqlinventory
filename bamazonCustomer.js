var mysql = require("mysql");
var inquirer = require("inquirer");

var Table = require("cli-table")
var chalk = require('chalk');
var design = chalk.white.bold("________________________________________________");

// TABLE FORMATS
  // Instead of using the cli-table npm, another option is the console.table (listed above and commented out below). All operates the same and can be 'toggled' given your preferred table format by commenting or uncommenting the 2nd viewProducts and require('console.table') function/s below.


// require('console.table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  viewProducts();
});
function viewProducts() {
    connection.query('SELECT * FROM products', function(err, res) {
        if (err) { console.log(err) };
        // Table Constructor using npm hinted @ in challenge 3...
        var productsTable = new Table({
            head: ['ID', 'Product', 'Department', 'Price', 'Quantity'],
            //set colum widths to fit column headers
            columns: [10, 20, 20, 10, 10]
        });
        //for each row of the loop
        for (i = 0; i < res.length; i++) {
            productsTable.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].quantity]
            );
        }
        //log the completed table to console
        console.log(productsTable.toString());
        purchaseRequest();
    });
  };
//Functions
// var design = chalk.white.bold("________________________________________________");
// function viewProducts() {
//   //show all ids, names, and products from database.
//   connection.query('SELECT * FROM products', function(err, res) {
//     if (err) {
//       console.log(err)
//     };
//     var column = ['ID', 'Product', 'Department', 'Price', 'Quantity'];
//     var values = [];
//     for (i = 0; i < res.length; i++) {
//       var rowValue = [res[i].item_id, res[i].product_name, res[i].department_name, "$" + res[i].price, res[i].quantity];
//       values.push(rowValue);
//     }
//     var productTitle = chalk.white.bold.bgBlack("~~~~***~***~~~~ BAMAZON PRODUCTS ~~~~***~***~~~~")
//     console.table(productTitle);
//     console.log(design);
//     console.log("");
//     console.table(column, values);
//     purchaseRequest();
//   });
// }; // viewProducts closure


// FUNCTION: Search Products based on user input
// ============================================================================
function purchaseRequest() {
  // console.log("!!~~* Search Reached *~~!!")
  inquirer.prompt([{
    name: "ids",
    type: "input",
    message: "Please enter the ID of the product you would like to purchase. ",
    validate: function(value) {
      if (isNaN(value) === false) {
        return true;
      }
      return false;
    }
  }, {
    name: "units",
    type: "input",
    message: "Enter the number of units you would like to purchase ",
    validate: function(value) {
      if (isNaN(value) === false) {
        return true;
      }
      return false;
    }
  }]).then(function(answer) {
    var purchaseUnits = parseInt(answer.units);
    var purchaseID = answer.ids
    checkInventory(purchaseID, purchaseUnits);
  });
}; // purchaseRequest closure


// FUNCTION: Check and Confirm Purchase Request
// ============================================================================
function checkInventory(purchaseID, purchaseUnits) {
  var query = "SELECT * FROM products WHERE item_id = ?";
  var data = [purchaseUnits, purchaseID];
  connection.query(query, purchaseID, function(err, res) {
    if (err) {
      console.log(err)
    };
    if (purchaseUnits <= res[0].quantity) {
      var amountOwed = res[0].price * purchaseUnits;

      // Present invoice/receipt for purchase to user
      console.log('');
      console.log('');
      console.log('');
      console.log('');
      console.log('');
      console.log(design);
      console.log(chalk.green.bold.bgBlack("$$$ RECEIPT $$$"));
     

      console.log(chalk.white.bgBlack("Your purchase of " + purchaseUnits + " " + res[0].product_name + "(s) is confirmed."));
      console.log(chalk.white.bold.bgBlack("Your total amounts to $" + amountOwed + "   "));
      console.log(design);
      console.log('');
      console.log('');
      console.log('');
      console.log('');
      console.log('');
      
      // Update Products table with new quantity post-purchase
      connection.query("UPDATE products SET quantity = quantity - ? WHERE item_id = ?", data);
    }
    else {
      console.log("Insufficient quantity of product: " + res[0].product_name);
    };
    viewProducts();
  });
}; // checkPurchaseRequest closure
// start();