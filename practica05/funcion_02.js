'use strict'

import * as vjcanvas from "./vjcanvas.js"

let vc = {};  // virtual coordinates
vc.min_x = Math.PI * -4;
vc.max_x = Math.PI * 4;
vc.min_y = -2;
vc.max_y = 2;


function dibuja_ejes(){
    let color = "black";
    let grosor = 1;
    let puntos;
    puntos = [ [vc.min_x,0], [vc.max_x, 0] ];
    vjcanvas.line(puntos, color, grosor);

    puntos = [ [0,vc.min_y], [0, vc.max_y] ] ;
    vjcanvas.line(puntos, color, grosor);
    return;
}


function main(){
    let corrige_ratio = false;
    vjcanvas.set_coords(vc.min_x,vc. max_x, vc.min_y, vc.max_y, corrige_ratio);

    let color = "black";
	let color2 = "blue";
	let color3 = "green";

    let grosor = 1;
    let y;
    let incremento_x = 0.02;

	let y2;
	let y3;

    dibuja_ejes();

    for(let x = vc.min_x; x<= vc.max_x; x += incremento_x){
        y = Math.log(x) ;
		y2= Math.atan(x);
		y3= Math.exp(x);

        vjcanvas.dot(x ,y ,color ,grosor);
		vjcanvas.dot(x, y2, color2, grosor);
		vjcanvas.dot(x, y3, color3	, grosor);
    }
};

main();
