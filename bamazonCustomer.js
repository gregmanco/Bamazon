var inquirer = require("inquirer");
var mysql = require("mysql");
// Iniates connection to mysql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "bouncer88",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    displayTable();

});
// Selects all data from the products database and console logs the table to the terminal
function displayTable() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res)
        // Iniates the inquirer npm package to query the users responses.
        inquirer
            .prompt([
                // Sets up questions for the user on what product they want to buy
                {
                    type: "input",
                    message: "What is the ID of the Product you want to buy?",
                    name: "product"
                },
                // Ask the user of the quantity of items tehy want to buy from the selected item ID
                {
                    type: "input",
                    message: "What quantity do you want to order?",
                    name: "quantity"
                }
                // Selects stock quntity coolumn and price from the selected item id.
            ]).then(function (answers) {
                connection.query("SELECT stock_quantity, price FROM products WHERE item_id = " + answers.product, function (err, res) {
                    if (err) throw err;
                 //   console.log(res[0].stock_quantity)
                    // Setting up variables for specific responses values.
                    var price = res[0].price
                    var quantity = res[0].stock_quantity
                    // If user selects more quantity than currently in stock will respond with "Insufficient Quantitty"
                    if (quantity < answers.quantity) {
                        console.log("Insufficent Quantity")
                        // If user selects an avaliable quantity of the item id they chose and logs the total price of the item * quantity to terminal
                    } else {
                        console.log("Ok you ordered " + answers.quantity + " of that item")
                        quantity = quantity - answers.quantity;
                        price = answers.quantity * price
                        connection.query("UPDATE products SET stock_quantity = " + quantity + " WHERE item_id = " + answers.product, function (err, res) {
                            if (err) throw err;
                            // console.log(res)
                            console.log("Your order has been processed!")
                            console.log(" Your order comes to  $" + price)

                            displayTable();
                        })
                    }


                })

            });



    });
}