'use strict'

import * as vjcanvas from "./vjcanvas.js"

function main(){
    let x, y, ancho, alto, diametro, color;

    let min_x = 0;
    let max_x = 1300;
    let min_y = 0;
    let max_y = 600;
    vjcanvas.set_coords(min_x, max_x, min_y);

    diametro = 25;

    let colores;
	let colores2;
	let colores3;
	let colores4;
	let colores5;
	let colores6;
	let colores7;
	let colores8;
/*COLORES DE CAMUFLAJE*/

	//colores vegetacion
    colores = ['green', '#7a917d', '#155d1f','#40984c', 'black'];
    colores = colores.concat(['#6b8b70', '#6b8b70', '#6b8b70', '#6b8b70'])
    console.log(colores);

	colores2 = ['green','#0b3510','#2a562f'];
	colores2 = colores2.concat(['black','black','black']);
	console.log(colores2);


	colores3 = ['green','black','#afa52e'];
	colores3 = colores3.concat(['black',]);
	console.log(colores3);

	//colores urbanos
	colores4 = ['#626462','black','#828f7e'];
	colores4 = colores4.concat(['#626462','#626462','#626462']);
	console.log(colores4);

	colores5 = ['#626462','black','#252b66'];
	colores5 = colores5.concat(['#626462','#626462','black','black']);
	console.log(colores5);


	//colores marinos

	colores6 = ['#ffffff','#1d4d8a','#5a7495'];
	colores6 = colores6.concat(['#ffffff','#ffffff','#1d4d8a']);
	console.log(colores6);

	colores7 = ['#20426d','#4f79af','#8cabd3'];
	colores7 = colores7.concat(['#8cabd3','#8cabd3','#20426d','#20426d']);
	console.log(colores7);

	//colores desierto
	colores8 = ['#adb21a','#d0d45f','#5c642a'];
	colores8 = colores8.concat(['#adb21a','#adb21a']);
	console.log(colores8);


/*PATRONES DE CAMUFLAJE*/

	//Patron vegetal 01
    let i_color = 0; // indice color

    for (let x=0; x <= 125; x += diametro*1.5)
        for (y=600; y >= 0; y-=diametro*1) {
            i_color = Math.floor(Math.random() * colores.length);
            vjcanvas.rectangle(x, y, 40, 40, colores[i_color]);
    	}

	//Patron vegetal 02

	for (let x= 150; x <= 250; x += diametro)
        for (let y=600; y >= 0; y -= diametro*1) {
			i_color = Math.floor(Math.random() * colores2.length)
            vjcanvas.circle(x, y, diametro* 1.5, colores2[i_color]);
		}

	//Patron vegetal 03

	for (let x=260; x <= 400; x += diametro*1.5)
        for (y=600; y >= 0; y-=diametro*1) {
            i_color = Math.floor(Math.random() * colores3.length);
            vjcanvas.rectangle(x, y, 40, 40, colores3[i_color]);
    	}

	//Patron urbano 01

	for (let x= 420; x <= 560; x += diametro)
        for (let y=600; y >= 0; y -= diametro*1) {
			i_color = Math.floor(Math.random() * colores4.length)
            vjcanvas.circle(x, y, diametro* 1.5, colores4[i_color]);
		}

	//Patron Urbano 02

	for (let x=560; x <= 700; x += diametro*1.5)
        for (y=600; y >= 0; y-=diametro*1) {
            i_color = Math.floor(Math.random() * colores5.length);
            vjcanvas.rectangle(x, y, 40, 40, colores5[i_color]);
		}

	//Patron Marino 01

	for (let x= 710; x <= 840; x += diametro)
	       for (let y=600; y >= 0; y -= diametro*1) {
			i_color = Math.floor(Math.random() * colores6.length)
	           vjcanvas.circle(x, y, diametro* 1.5, colores6[i_color]);
			}

	for (let x=840; x <= 940; x += diametro*1.5)
        for (y=600; y >= 0; y-=diametro*1) {
            i_color = Math.floor(Math.random() * colores7.length);
            vjcanvas.rectangle(x, y, 40, 40, colores7[i_color]);
		}

	//Patron desierto 01

	for (let x= 970; x <= 1060; x += diametro)
	       for (let y=600; y >= 0; y -= diametro*1) {
			i_color = Math.floor(Math.random() * colores8.length)
	           vjcanvas.circle(x, y, diametro* 1.5, colores8[i_color]);
			}
}

main();
