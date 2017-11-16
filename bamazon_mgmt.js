 var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table")

// require('console.table');
var chalk = require('chalk');



// Connect to MySQL Server + DB
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

// Connect >> throw error or call viewProducts function
connection.connect(function(err) {
    if (err) throw err;
    viewProducts();
});
//Functions
var design = chalk.white.bold("________________________________________________");

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
        console.log('');
        console.log(productsTable.toString());
        console.log('');
        console.log('');
        inquireMGMT();
    });
}; // viewProducts closure

function inquireMGMT() {
    // console.log("INQUIRE-MGMT HAPPENED!!!!");
    connection.query("SELECT LAST_INSERT_ID()");
    //inquire for input
    inquirer.prompt([{
            name: "action",
            type: "list",
            message: "MGMT - choose an option below:",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory"] 
            // "Add New Product"
    }])
        .then(function(answers) {

            switch (answers.action) {
                case 'View Products for Sale':
                    viewProductsSale();
                    break;
                case 'View Low Inventory':
                    viewLowInventory();
                    break;
                case 'Add to Inventory':
                    addToInventory();
                    break;
                // case 'Add New Product':
                //     addNewProduct();
                //     break;
                default: 'View Products For Sale'
                viewProductsSale();
                break;
            }
        });
}; // inquireMGMT closure

function addToInventory() {
    console.log("ADD-TO-INVENTORY HAPPENED!!!!");
    //gather data from user
    inquirer.prompt([{
            name: "ids",
            type: "input",
            message: "Please enter the ID of the product you would like to increase in the inventory."
    }, {
            name: 'units',
            type: 'input',
            message: "How many units would you like to add?"
    }, ])
        .then(function(answers) {
            var addedUnits = answers.units;
            var addedIDs = answers.ids;
            addInventory(addedIDs, addedUnits);
        });
}; // 

//runs on user parameters from the request function
function addInventory(addedIDs, addedUnits) {
    console.log("ADD-INVENTORY2 HAPPENED!!!!");
    //update the database
    connection.query('SELECT * FROM products WHERE item_id = ' + addedIDs, function(err, res) {
        if (err) {
            console.log(err)
        };
        connection.query('UPDATE products SET quantity = quantity + ' + addedUnits + ' WHERE item_id = ' + addedIDs);
        //re-run display to show updated results
        viewProducts();
        inquireMGMT();
    });
};

// ADD NEW PRODUCT (2 functions to retrieve input & update DB)
// ============================================================================
// function addNewProduct() {
//     console.log("ADD-NEW-PRODUCT HAPPENED!!!!");
//     inquirer.prompt([{
//             name: "item_id",
//             type: "input",
//             message: "What is the ID of the product you wish to add?"
//     }, {    
//             name: "product_name",
//             type: "input",
//             message: "What is the name of the product you wish to add?"
//     }, {
//             name: 'department_name',
//             type: 'input',
//             message: "What is the department to which this product belongs?"
//     }, {
//             name: 'price',
//             type: 'input',
//             message: "What is the price of said product?"
//     }, {
//             name: 'quantity',
//             type: 'input',
//             message: "How many units do you wish to add to the inventory?"
//     }, ])
//         .then(function(answers) {
//             var item_id = answers.item_id;
//             var product_name = answers.product_name;
//             var department_name = answers.department_name;
//             var price = answers.price;
//             var quantity = answers.quantity;
//             addProduct(item_id, product_name, department_name, price, quantity);
//         });
// }; //end addNewProduct
// function addProduct(item_id, product_name, department_name, price, quantity) {
//     console.log("ADD-PRODUCT2 HAPPENED!!!!");
//     //query database, insert new item
//     connection.query('INSERT INTO products (item_id, product_name, department_name, price, quantity) VALUES("'item_id' ,'product_name',' department_name',' + price + ',' + quantity + '")');
//     //display updated results
//     viewProducts();
//     inquireMGMT();
// }; //end addProduct
// VIEW SALE PRODUCT (description)
// ============================================================================
function viewProductsSale() {
    console.log("VIEW-PRODUCT-SALE HAPPENED!!!!");
    viewProducts();
}; // viewProductsSale closure
// VIEW LOW INVENTORY (description)
// ============================================================================
function viewLowInventory() {
    console.log("VIEW-LOW-INVENTORY HAPPENED!!!!");
    connection.query('SELECT * FROM products WHERE quantity = (quantity > 5)', function(err, res) {
        if (err) {
            console.log(err)
        };
        var column = ['ID', 'Product', 'Department', 'Price', 'Quantity'];
        var values = [];
        for (i = 0; i < res.length; i++) {
            var rowValue = [res[i].item_id, res[i].product_name, res[i].department_name, "$" + res[i].price, res[i].quantity];
            values.push(rowValue);
        }
        var productTitle = chalk.white.bold.bgBlack("~~~~***~***~~~~ BAMAZON PRODUCTS ~~~~***~***~~~~")
        console.table(productTitle);
        console.log(design);
        console.log("");
        console.table(column, values);
        inquireMGMT();
    });
}; // viewLowInventory closure
// ============================================================================

