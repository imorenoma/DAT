$(document).ready(function() {

	var idiomas = {japOpen : "示す", japClose: "隠す" , ingOpen : "Show", ingClose :"Hide", spOpen : "Mostrar", spClose : "Ocultar"};
	change = false;
	jP = false;
	gb = false;
	esp=true;
	let myReg;

	$(".jap").click(function(){
		esp =false;
		jP = true;
		gb = false;

		myReg = '<tr><td>' + moment().format() + '</td><td>' + "Configuramos el interface en Japones" + '</td></tr>';
		$("#Registro").append(myReg);
	});

	$(".ing").click(function(){
		esp =false;
		gb = true;
		jP=false;

		myReg = '<tr><td>' + moment().format() + '</td><td>' + "Configuramos el interface en Ingles" + '</td></tr>';
		$("#Registro").append(myReg);
	});

	$(".esp").click(function(){
		esp =true;
		gb = false;
		jP=false;

		myReg = '<tr><td>' + moment().format() + '</td><td>' + "Configuramos el interface en Español" + '</td></tr>';
		$("#Registro").append(myReg);
	});

	$("#toggle-it").click(function() {


		/*El idioma por defecto es el español, ademas tambien podemos volver
		a el dando click en la imagen del idioma. Para este caso cambiamos
		el boton a ocultar y mostramos la imagen*/

		if (change==false && jP==false && gb ==false && esp==true) {
	  		$("#image").show("oculto");
			let v_text = $("#toggle-it").text();
			let v_out = idiomas.spClose;
			$("#toggle-it").text(v_out);
			change=true;

			let myReg = '<tr><td>' + moment().format() + '</td><td>' + "Mostrar Imagen" + '</td></tr>';
			$("#Registro").append(myReg);

/*-------------------------------------------------------*/
/*----------------------Japones--------------------------*/
/*-------------------------------------------------------*/

		/*cambio boton a ocultar en japones y mostramos la imagen*/
		}else if (change==false && jP==true && gb==false && esp==false) {
			$("#image").show("oculto");
			let v_text = $("#toggle-it").text();
			let v_out = idiomas.japClose;
			$("#toggle-it").text(v_out);
			change=true;

			let myReg = '<tr><td>' + moment().format() + '</td><td>' + "Mostar Imagen" + '</td></tr>';
			$("#Registro").append(myReg);

		/*cambio boton a mostrar en japones y ocultamos la imagen*/
		}else if (change==true && jP==true && gb==false && esp==false) {
			$("#image").hide("oculto");
			let v_text = $("#toggle-it").text();
			let v_out2 = idiomas.japOpen;
			$("#toggle-it").text(v_out2);
			change=false;

			myReg = '<tr><td>' + moment().format() + '</td><td>' + "Ocultar Imagen" + '</td></tr>';
			$("#Registro").append(myReg);


/*-------------------------------------------------------*/
/*--------------------------INGLES------------------------*/
/*-------------------------------------------------------*/

		/*cambio boton a ocultar en ingles y mostramos la imagen*/
		}else if (change == false && jP==false && gb == true && esp==false) {
			$("#image").show("oculto");
			let v_text = $("#toggle-it").text();
			let v_out = idiomas.ingClose;
			$("#toggle-it").text(v_out);
			change=true;

			myReg = '<tr><td>' + moment().format() + '</td><td>' + "Mostar Imagen" + '</td></tr>';
			$("#Registro").append(myReg);

		/*cambio boton a mostrar en ingles y ocultamos la imagen*/
		}else if (change == true && jP==false && gb == true && esp==false) {
			$("#image").hide("oculto");
			let v_text = $("#toggle-it").text();
			let v_out2 = idiomas.ingOpen;
			$("#toggle-it").text(v_out2);
			change=false;

			myReg = '<tr><td>' + moment().format() + '</td><td>' + "Ocultar Imagen" + '</td></tr>';
			$("#Registro").append(myReg);

		/*si no cumple ninguna de las condiciones anteriores
		seguimos con el español en este caso ocultamos la imagen y cambiamos
		el boton a mostrar*/
		}else{
			$("#image").hide("oculto");
			let v_text = $("#toggle-it").text();
			let v_out2 = idiomas.spOpen;
			$("#toggle-it").text(v_out2);
			change=false;

			myReg = '<tr><td>' + moment().format() + '</td><td>' + "Ocultar Imagen" + '</td></tr>';
			$("#Registro").append(myReg);
		}

	});
});
