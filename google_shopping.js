var data = require("./products.json")

// Write your solutions below

var backorder = [];

var isBackorder = function() {
	for (i = 0; i < data.items.length; i++) {
		if (data.items[i].product.inventories[0].availability === "backorder") {
			backorder.push(data.items[i].product.googleId)
		}
	}
console.log(backorder);
}

isBackorder();
