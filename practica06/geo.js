'use strict'
$(document).ready(function() {
	let latitud=40.3175; //coordenada y
	let longitud=-3.8602; //coordenada x
	let zoom=16;
	let colors = ['red', 'green', 'blue'];

/*---------------JSON DATA SECTION---------------*/

	let datos = {"d1" : ["40.3210369", "-3.8500770", "50", "44", "20"]}

	let datos2 = '{"latitud": 40.32153, "longitud": -3.8513, "contagiados":50 , "altas": 44  ,"fallecidos":30}'

	function parseLat(){
		let lat1 = JSON.parse(datos2);
		var my_lat = lat1.latitud;
		return my_lat;
	}

	function parseLong(){
		let long1 =JSON.parse(datos2);
		var my_long = long1.longitud;
		return my_long;
	}

	function parseContag(){
		let contag1 = JSON.parse(datos2);
		var my_contag = contag1.contagiados;
		return my_contag;
	}

	function parseAltas(){
		let alta1 = JSON.parse(datos2);
		var my_alta = alta1.altas;
		return my_alta;
	}

	function parseFalle(){
		let falle1 = JSON.parse(datos2);
		var my_falle = falle1.fallecidos;
		return my_falle;
	}

/*------------------------------MAP SECTION----------------------------------*/

	let mi_mapa = L.map('map').setView([latitud, longitud], zoom);

     L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
      }).addTo(mi_mapa);

/*---------------------------MARKER SECTION-----------------------------------*/
		var lat1 = parseLat();
		var long1 = parseLong();
		var contag1 = parseContag();
		var altas1 = parseAltas()
		var falle1 = parseFalle();


		var orangeIcon = new L.icon({
			iconUrl : 'leaf-orange.png',
			iconSize: [50, 55], // size of the icon
 			shadowSize:   [50, 64], // size of the shadow
 			iconAnchor:   [25, 50], // point of the icon which will correspond to marker's location
 			shadowAnchor: [4, 62],  // the same for the shadow
 			popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
		});

		var greenIcon =new L.icon({
			iconUrl : 'leaf-green.png',
			iconSize: [50, 55],
 			shadowSize:   [50, 64],
 			iconAnchor:   [25, 50],
 			shadowAnchor: [4, 62],
 			popupAnchor:  [-3, -76]
		});

		let coord_most = [datos.d1[0],datos.d1[1]];
		let marcador1 = L.marker(coord_most,{icon:orangeIcon}).addTo(mi_mapa);
		marcador1.bindPopup("contagiados: " + datos.d1[2] + " " + "altas: " + datos.d1[3] + " " + "fallecidos: " +  datos.d1[4]).openPopup();

		let coords_most2 = [lat1, long1];
		let marcador2 = L.marker(coords_most2,{icon:greenIcon}).addTo(mi_mapa); //creamos el marcador
		marcador2.bindPopup("contagiados: " + contag1 + " altas: " + altas1 + " fallecidos: " + falle1).openPopup();//generamos el popup con datos del JSON

});


/*ESTE EJERCICIO HA SIDO REALIZADO DE DOS FORMAS DISTINTAS CON DOS FORMAS DE JSON
TAMBIEN SE HAN CAMBIADO LOS ICONO Y SE HAN PUESTO UNOS PERSONALIZADOS*/
