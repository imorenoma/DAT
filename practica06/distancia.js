'use strict'

$(document).ready(function() {

	let options = {
	  enableHighAccuracy: true,
	  timeout: 5000,
	  maximumAge: 0
	};

	function success(pos){

/*---------------------MAP SECTION-------------------------*/
		let x = pos.coords;
		let latitud = x.latitude;
		let longitud = x.longitude;

		let mi_mapa = L.map('map').setView([latitud, longitud], 16);

		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
		}).addTo(mi_mapa);

		 /*MARKER SECTION*/

		 let pos_usr = [latitud,longitud];
		 let marker = L.marker(pos_usr).addTo(mi_mapa);

		 marker.bindPopup("Home").openPopup();


/*------------------LocalStorage Section------------------*/

		 let init_point = "start";
		 let home_point = localStorage.getItem(init_point);

		 if(home_point != null){

			 home_point = JSON.parse(home_point);
			 let marker_home = L.marker(home_point).addTo(mi_mapa);
			 marker_home.bindPopup("Usted esta aqui");
			 $("#Clean").show();
		 }

		 /*MAXIMUN RADIUS, IN THIS CASE 1 KM */

		 var circle = L.circle([latitud, longitud], {
          color: 'blue',
          fillColor: '#158bae',
          fillOpacity: 0.8,
          radius: 1000
	  }).addTo(mi_mapa);


/*------------------FUNCIONALIDAD BOTONES---------------------*/

		 $("#Save").click(function(){
			 let home_point = [latitud, longitud];

			 localStorage.removeItem(init_point);
			 localStorage.setItem(init_point, JSON.stringify(home_point));

			 let marker_home = L.marker(home_point).addTo(mi_mapa);

			 marker_home.bindPopup("Usted esta aqui").openPopup();
			 $("#Clean").show();
		 });

		 $("#Clean").click(function(){
			localStorage.removeItem(init_point);
            $("#Clean").hide();
        });

	}

	function error(err) {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	};

	navigator.geolocation.getCurrentPosition(success, error, options);
});
