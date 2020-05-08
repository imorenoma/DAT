'use strict'

import * as vjcanvas from "./vjcanvas.js"

function main(){
    let x, y, ancho, alto, diametro, color;

    let min_x = 0;
    let max_x = 100;
    let min_y = 0;
    vjcanvas.set_coords(min_x, max_x, min_y);
	let colors = ['grey', 'green', 'blue'];

    diametro = 5;

	//Creating multiple circles
    for (let x=5; x <= 15; x += diametro)
        for (let y=0; y <= 60; y += diametro) {
            vjcanvas.circle(x, y, diametro, colors[0]);
    }

	//creating multiple squares with function rectangle
	for (let x = 25; x <=35; x += 6)
		for(let y=0; y <= 60; y += 11){
			vjcanvas.rectangle(x, y, 5, 5, colors[1]);
		}

	//Creating multiple rectangles	
	for (let x = 45; x <=55; x += 10)
		for(let y=0; y <= 60; y += 11){
			vjcanvas.rectangle(x, y, 7, 5,colors[2]);
		}


}

main();
