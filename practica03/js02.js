function parametros(x,chain){

	if (chain != "m") {
		console.log("Error");
	}else if (chain != "cm") {
		console.log("Error");
	}else if (chain != "in") {
		console.log("Error");
	}else if (chain != "yd"){
		console.log("Error");
	}else{
		if (chain == "m") {
			return(x + " " + chain);
		}else if (chain == "cm") {
			return(x + " " + chain);
		}else if (chain == "in") {
			return(x + " " + chain);
		}else {
			return(x + " " + chain);
		}
	}
}

var number = 7;
var unit = "m";

console.log(parametros(number,unit));
