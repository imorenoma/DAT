'use strict'


function validator(pass){
	var mayus = false;
	var minus = false;
	var num = false;
	var specialchar = false;

	if(pass.length >= 8) {

		for (var i = 0; i < pass.length; i++) {
			if (pass.charCodeAt(i)>=65 && pass.charCodeAt(i)<=90) {
				//60 & 90 corresponding to ASCII number for uppercase chars
				mayus = true;
			}else if (pass.charCodeAt(i)>=97 && pass.charCodeAt(i)<=122) {
				minus = true;
			}else if (pass.charCodeAt(i)>=48 && pass.charCodeAt(i)<=57) {
				num = true;
			}else{
				specialchar = true;
			}

			if (mayus == true && minus == true && num == true && specialchar == true) {
				return true;
			}
		}
	}

	return false;
}

var psswd = "A12BBca/kku47d,dkBB";

console.log(validator(psswd));
