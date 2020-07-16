'use strict'
//Nombre: Ivan Moreno Martin, logig: ivmoreno
function validator(pass){
	var mayus = false;
	var upper = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

	var minus = false;
	var lower = "abcdefghijklmnñopqrstuvwxyz";

	var num = false;
	var numbers ="1234567890";

	var specialchar = false;

	var cont = 0;
	var cont2 = 0;
	var cont3 = 0;
	var cont4 = 0;

	if(pass.length >= 8) {

		/*Upper Case Section*/
		for (var i = 0; i < pass.length; i++) {
			for(var j= 0; j < upper.length; j++){
				if(pass[i] == upper[j]){
					cont += 1;
				}
			}
		/*Lower Case Section*/
			for (var l = 0; l < lower.length; l++) {
				if (pass[i] == lower[l]) {
					cont2 += 1;
				}
			}
		/*Number Section*/
			for(var k = 0; k < numbers.length; k++){
				if(pass[i] == numbers[k]){
					cont3 += 1;
				}
			}
		/*Special chars Section*/
			for(var m = 0; m < pass.length; m++){
				if(pass.charCodeAt(m)>=48 && pass.charCodeAt(m)<=57){
					cont4 += 1;
				}
			}
		}

	}else{
		return("Error: password to short, minimun length 8");
	}

	if((cont == 0 || cont >= 2) && (cont2 == 0 || cont2 >= 2) && cont3 >= 0 && cont4 >= 0){
			mayus = true;
			minus =true;
			numbers = true;
			specialchar = true;
	}

	if (cont == 1) {
		return("Error: " + "You need 2 or more Uppecase char you have " + cont);
	}

	if(cont2 == 1){
		return("Error: " + "You need 2 or more Lowercase char you have " + cont2);
	}

	if(mayus == true && minus == true && numbers == true && specialchar == true){
		return "ok";
	}
}


var psswd = "123";
var psswd1 = "1231234567897654324567F";
var psswd2 = "aaaaaaaaaaaaaaaaaaaaaaaaaaa";
var psswd3 = "AAAAAAAAAAAAAAAAAAAAAAAAA";
var psswd4 = "!·$%&/()=(/&%$·$%&/()($)|@#{{{}}})";
var psswd5 = "asdc678asFF";
var psswd6 = "dqwk-.eflwe.";
var psswd7 = "ññññññññÑÑÑÑÑÑÑÑÑÑÑ";
var psswd8 = "ñÑlGrancañóndelcolôrado"


console.log(validator(psswd));
console.log(validator(psswd1));
console.log(validator(psswd2));
console.log(validator(psswd3));
console.log(validator(psswd4));
console.log(validator(psswd5));
console.log(validator(psswd6));
console.log(validator(psswd7));
console.log(validator(psswd8));
