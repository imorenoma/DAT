'use strict'

import * as vjcanvas from "./vjcanvas.js"

function main(){
    let x, y, ancho, alto, diametro, color;

    let min_x = 0;
    let max_x = 100;
    let min_y = 0;
    vjcanvas.set_coords(min_x, max_x, min_y);
	let colors = ['red', 'green', 'blue'];

    diametro = 5;

    for (let x=0; x <= 600; x += diametro)
        for (let y=0; y <= 300; y += diametro) {
            vjcanvas.circle(x, y, diametro, colors[1]);
    }

	vjcanvas.rectangle(800, 0, 100, 200,colors[2]);
	vjcanvas.rectangle(700, 0, 200, 200, colors[0]);
}

main();
