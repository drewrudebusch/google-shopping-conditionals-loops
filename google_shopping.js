var data = require("./products.json")

// Write your solutions below

var products = [];

var isCanon = function() {
	for (i = 0; i < data.items.length; i++) {
		if (data.items[i].product.brand === "Canon") {
			products.push(data.items[i].product.googleId)
		}
	}
console.log(products);
}

isCanon();
