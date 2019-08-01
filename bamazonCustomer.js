var inquirer = require("inquirer");
var mysql = require("mysql");

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

function displayTable() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res)

        inquirer
            .prompt([
                // Here we create a basic text prompt.
                {
                    type: "input",
                    message: "What is the ID of the Product you want to buy?",
                    name: "product"
                },
                {
                    type: "input",
                    message: "What quantity do you want to order?",
                    name: "quantity"
                }
            ]).then(function (answers) {
                connection.query("SELECT stock_quantity, price FROM products WHERE item_id = " + answers.product, function (err, res) {
                    if (err) throw err;
                    console.log(res[0].stock_quantity)
                    var price = res[0].price
                    var quantity = res[0].stock_quantity

                    if (quantity < answers.quantity) {
                        console.log("Insufficent Quantity")

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

                    // console.log(res[0].stock_quantity);

                })

            });



    });
}
//   if ( inquirerResponse.quantity > res.products.stock_quantity)
//   console.log("")