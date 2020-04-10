'use strict'
function pasocm(m){
    return(m*100);
}
function pasopulg(m){
	return (m/0.0254);
}
function pasoyard(m){
	 return (m/0.9144);
}
let num;

num=4;
console.log(pasocm(num));
console.log(pasopulg(num));
console.log(pasoyard(num));
num=0.99;
console.log(pasocm(num));
console.log(pasopulg(num));
console.log(pasoyard(num));
num=-7;
console.log(pasocm(num));
console.log(pasopulg(num));
console.log(pasoyard(num));
