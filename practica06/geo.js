'use strict'
//import * as vjcanvas from "../practica05/vjcanvas.js"

function coordsAlea(){

/*
		let min_x = -1;
	    let max_x = 1;
	    let min_y = -.6;

	    vjcanvas.set_coords(min_x, max_x, min_y);

	    let x, y, grosor, alto, radio, color;
	    color = "black"
	    radio = max_x / 2;
	    let incremento = .02;
	    grosor = 2;

	    for (let angulo = 0; angulo <= 2 * Math.PI ; angulo = angulo + incremento){
	        y = Math.sin(angulo) * radio;
	        x = Math.cos(angulo) * radio;
	        vjcanvas.dot(x, y, color, grosor);
	    };*/
/*
	let numRnd = Math.random() * (( 2 * Math.PI) - 0) + 0;

	let sin = Math.sin(numRnd * Math.PI / 180);
	let cos = Math.cos(numRnd * Math.PI / 180);

	let radRnd = (Math.random() * (( Math.PI * 2) - 0) + 0)/2;

	let x = radRnd * sin;
	let y = radRnd * cos;

	let coords = [x , y];
	return coords;
*/

}


let datos = {"d1" : ["long","lat", "radius", "contagiados", "altas", "fallecidos"],
"d2" : ["long","lat", "radius", "contagiados", "altas", "fallecidos"],
"d3" : ["long","lat", "radius", "contagiados", "altas", "fallecidos"],
"d4" : ["long","lat", "radius", "contagiados", "altas", "fallecidos"]
};

console.log(typeof(datos), datos);

console.log(coordsAlea());
