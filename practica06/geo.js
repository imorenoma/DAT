'use strict'
$(document).ready(function() {
	let latitud=40.3175; //coordenada y
	let longitud=-3.8602; //coordenada x
	let zoom=16;

	/*---------------JSON DATA---------------*/

	let datos = {"d1" : ["long","lat", 5, 50, 44, 20],
	"d2" : ["long","lat", 6, 44, 11, 8],
	"d3" : ["long","lat", 0.2, 60, 1, 1],
	"d4" : ["long","lat", 10, 90, 13, 33],
	"d5" : ["long","lat", 5, 77, 20, 20],
	"d6" : ["long","lat", 4, 66, 0, 11],
	"d7" : ["long","lat", 20, 300, 0, 100],
	"d8" : ["long","lat", 11, 42, 11, 40],
	"d9" : ["long","lat", 0.6, 111, 23, 1],
	"d10" : ["long","lat", 0.3, 101, 4, 0],
	"d11" : ["long","lat", 2.5, 22, 2, 2],
	"d12" : ["long","lat", 7, 40, 21, 6],
	"d13" : ["long","lat", 6.5, 65, 44, 3],
	"d14" : ["long","lat", 2.2, 102, 33, 2],
	"d15" : ["long","lat", 4.3, 67, 3, 4]
}
	//let chain = JSON.parse(datos);

	console.log(typeof(datos), datos.d1[2]);
	/*---------------------------------------*/



	let mi_mapa = L.map('map').setView([latitud, longitud], zoom);

     L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
      }).addTo(mi_mapa);


	  var circle = L.circle([40.32153, -3.8513], {
			color: 'blue',
			fillColor: 'blue',
			fillOpacity: 0.2,
			radius: 200
		}).addTo(mi_mapa);




		let coords_most = [40.32153, -3.8513];
		let marcador1 = L.marker(coords_most).addTo(mi_mapa); //creamos el marcador
		//marcador1.bindPopup("Messagge here").openPopup(); //generamos el popup
		marcador1.bindPopup(datos.d1[0] + " " + datos.d1[1]).openPopup();
});

//"d4" : ["long","lat", "radius", "contagiados", "altas", "fallecidos"]




//console.log(typeof(datos), datos);

//console.log(coordsAlea());
