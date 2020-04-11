'use strict'


function validator(pass){
	var mayus = false;
	var minus = false;
	var num = false;
	var specialchar = false;

	if(pass.length >= 8) {

		for (var i = 0; i < pass.length; i++) {
			if (pass.charCodeAt(i)>=65 && pass.charCodeAt(i)<=90 && pass.charCodeAt(i) == '\u00D1') {
				//60 & 90 corresponding to ASCII number for uppercase chars
				mayus = true;
			}else if (pass.charCodeAt(i)>=97 && pass.charCodeAt(i)<=122&& pass.charCodeAt(i) == '\u00F1') {
				minus = true;
			}else if (pass.charCodeAt(i)>=48 && pass.charCodeAt(i)<=57) {
				num = true;
			}else{
				specialchar = true;
			}

			if (mayus == false || minus == false || num == false || specialchar == false) {
				return "ok";
			}
		}
	}

	if (pass.length <= 7) {
		return("Error: password to short, minimun length 8");
	}
}

var psswd = "123";
var psswd1 = "12312345678976543245676";
var psswd2 = "aaaaaaaaaaaaaaaaaaaaaaaaaaa";
var psswd3 = "AAAAAAAAAAAAAAAAAAAAAAAAA"
var psswd4 = "!·$%&/()=(/&%$·$%&/()($)|@#{{{}}})";
var psswd5 = "12345asdc678asdf";
var psswd6 = "dqwk,ksdAdfTfdsrgg";
var psswd7 = "ññññññññÑÑÑÑÑÑÑÑÑÑÑ";
var psswd8 = "ElgranCañóndelcolôrado"

console.log(validator(psswd));
console.log(validator(psswd1));
console.log(validator(psswd2));
console.log(validator(psswd3));
console.log(validator(psswd4));
console.log(validator(psswd5));
console.log(validator(psswd6));
console.log(validator(psswd7));
