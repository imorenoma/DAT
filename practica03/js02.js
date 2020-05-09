'use strict'
//Nombre: Ivan Moreno Martin, logig: ivmoreno
function parametros(x, chain) {

	if(isNaN(x)){
		return("Error: " + x + " is not a Number");
	}

	if(chain == "m") {
		return(x + " " + chain);
	}else if (chain == "cm") {
		return(x + " " + chain);
	}else if (chain == "in") {
		return(x + " " + chain);
	}else if (chain == "yd") {
		return(x + " " + chain);
	}else {
		return("Error: " + chain + " not available")
	}
}

var num = 1.0;
var unit = "m";

console.log(parametros(num,unit));
