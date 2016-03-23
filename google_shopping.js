var data = require("./products.json")

// Write your solutions below

var products = [];
var productDetails = [];

var printAllItems = function() {
	for (i = 0; i < data.items.length; i++) {
		productDetails = [];
		for (j = 0; j < data.items[i].product.images.length; j++){
			productDetails.push(data.items[i].product.images[j].link);
		}
		products.push({
			brand: (data.items[i].product.brand),
			price: (data.items[i].product.inventories[0].price),
			link: productDetails
		});
	}
	console.log(products);
}

printAllItems();