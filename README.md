### Bamazon

##Bamazon Customer

##Description:

This application uses the command line to imitate the amazon storefront using the npm inquirer package. It also uses a MySQL database along with the npm mysql package.


The file bamazonCustomer.js will take in orders from customers and deplete stock from the store's inventory. The user will be prompted to select the product they would like to buy and the quantity of the purchase. If the item is in stock the order will be completed and the total amount of the purchase will be logged else "insuffecient stock" will be logged.

Must have Node.js and Mysql installed on your computer.


##Technologies Used:

<strong>Javascript, Node.js, MySql, Npm Inquirer</strong>

##NPM Packages:

Inquirer - Inquirer.js provides the user interface and the inquiry session flow

MySql - Establishes connection with your sql files

##Usage:
<ol>
<li>1. Git clone repo: git@github.com:gregmanco/Bamazon.git</li>

<li>2. Run Terminal in bamazonCustomer.js</li>

<li>3. Type "NPM install" (This will install inquirier npm module and mysql module.)</li>

<li>4. Type node bamazonCustomer.js in ther terminal and a table of items will be displayed</li>

<li>5. Select which product you would like to buy using the item_id(1-10)</li>

<li>6. You will be prompted to select the qunatity of the item previously selected.
   If the item quantity is greater than the stock it will log " Insufficient Quantity".
   If item quantity is less than the stock_quantity the order will be processed  and a total returned.</li>
   </ol>