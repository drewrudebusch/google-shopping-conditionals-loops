var data = require("./products.json")

// Write your solutions below

var products = [];
var productDetails = [];

var printAllItems = function() {
	for (i = 0; i < data.items.length; i++) {
		productDetails = [];
		productDetails.brand = (data.items[i].product.brand);
		productDetails.price = (data.items[i].product.inventories[0].price);
		productDetails.link = (data.items[i].product.images[0].link);
		products.push(productDetails);
	}
	console.log(products);
}

printAllItems();