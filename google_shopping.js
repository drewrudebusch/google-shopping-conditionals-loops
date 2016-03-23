var data = require("./products.json")

// Write your solutions below

var products = [];

var isCanonAndEbay = function() {
	for (i = 0; i < data.items.length; i++) {
		if (data.items[i].product.brand === "Canon") {
			if (data.items[i].product.author.name.slice(0,4) === "eBay") {
				products.push(data.items[i].product.googleId)
			}
		}
	}
console.log(products);
}

isCanonAndEbay();
