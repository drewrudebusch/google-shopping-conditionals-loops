var data = require("./products.json")

// Write your solutions below

var products = [];
var productDetails = [];

var printAllItems = function() {
	for (i = 0; i < data.items.length; i++) {
		products.push({
		brand: (data.items[i].product.brand),
		price: (data.items[i].product.inventories[0].price),
		link: (data.items[i].product.images[0].link)});
		// products.push(productDetails);
	}
	console.log(products);
}

printAllItems();