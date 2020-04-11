'use strict'
function parametros(x, chain) {

	if (chain !== "m") {
		alert("Error");
	}else if (chain !== "cm") {
		alert("Error");
	}else if (chain !== "in") {
		alert("Error");
	}else if (chain !== "yd") {
		alert("Error");
	}else {
		if (chain == "m") {
			return x.toString() + " " + chain;
		}else if (chain == "cm") {
			return x.toString() + " " + chain;
		}else if (chain == "in") {
			return x.toString() + " " + chain;
		}else {
			return x.toString() + " " + chain;
		}
	}
}

var number = 7;
var unit = "m";

console.log(parametros(number,unit));
