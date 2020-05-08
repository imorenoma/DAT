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

    for (let x=0; x <= 10; x += diametro)
        for (let y=0; y <= 50; y += diametro) {
            vjcanvas.circle(x, y, diametro, colors[1]);
    }
	for (let x = 15; x <=25; x += diametro)
		for(let y=0; y <= 50; y += diametro){
			vjcanvas.rectangle(x, y, 5, 5, colors[0]);
		}

	for (let x = 35; x <=45; x += diametro)
		for(let y=0; y <= 50; y += diametro){
			vjcanvas.rectangle(x, y, 5, 4,colors[2]);
		}


}

main();
