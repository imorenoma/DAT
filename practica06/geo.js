'use strict'
$(document).ready(function() {
	let latitud=40.3175; //coordenada y
	let longitud=-3.8602; //coordenada x
	let zoom=16;

	let mi_mapa = L.map('map').setView([latitud, longitud], zoom);

     L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
      }).addTo(mi_mapa);


	  var circle = L.circle([40.32153, -3.8513], {
			color: 'blue',
			fillColor: 'blue',
			fillOpacity: 0.3,
			radius: 200
		}).addTo(mi_mapa);


		/*var popup = L.popup()
  			.setLatLng([40.32153, -3.8513])
      		.setContent("I am a standalone popup.")
      		.openOn(mi_mapa);*/

		let coords_most = [40.32153, -3.8513];
		let marcador1 = L.marker(coords_most).addTo(mi_mapa); //creamos el marcador
		marcador1.bindPopup("Marca").openPopup(); //generamos el popup
});


let datos = {"d1" : ["long","lat", "radius", "contagiados", "altas", "fallecidos"],
"d2" : ["long","lat", "radius", "contagiados", "altas", "fallecidos"],
"d3" : ["long","lat", "radius", "contagiados", "altas", "fallecidos"],
"d4" : ["long","lat", "radius", "contagiados", "altas", "fallecidos"]
};

//console.log(typeof(datos), datos);

//console.log(coordsAlea());
