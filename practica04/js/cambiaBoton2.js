$(document).ready(function() {

	var idiomas = {japOpen : "示す", japClose: "隠す" , ingOpen : "Show", ingClose :"Hide", spOpen : "Mostrar", spClose : "Ocultar"};
	change = false;
	jap = false;
	gb = false;
	esp=true;

	$(".jap").click(function(){
		esp =false;
		jap = true;
		gb = false;
	});
	$(".ing").click(function(){
		esp =false;
		gb = true;
		jap=false;
	});

	$(".esp").click(function(){
		esp =true;
		gb = false;
		jap=false;
	});

      $("#toggle-it").click(function() {
		  if (change==false && jap==false && gb ==false && esp==true) {
		  	$("#image").show("oculto");
			let v_text = $("#toggle-it").text();
			let v_out = idiomas.spClose;
			$("#toggle-it").text(v_out);
			change=true;

		}else if (change==false && jap==true && gb==false && esp==false) { //japones ocultar
			$("#image").show("oculto");
			let v_text = $("#toggle-it").text();
			let v_out = idiomas.japClose;
			$("#toggle-it").text(v_out);
			change=true;
		}else if (change==true && jap==true && gb==false && esp==false) { //japones mostrar
			$("#image").hide("oculto");
			let v_text = $("#toggle-it").text();
			let v_out2 = idiomas.japOpen;
			$("#toggle-it").text(v_out2);
			change=false;

		}else if (change == false && jap==false && gb == true && esp==false) {
			$("#image").show("oculto");
			let v_text = $("#toggle-it").text();
			let v_out = idiomas.ingClose;
			$("#toggle-it").text(v_out);
			change=true;
		}else if (change == true && jap==false && gb == true && esp==false) {
			$("#image").hide("oculto");
			let v_text = $("#toggle-it").text();
			let v_out2 = idiomas.ingOpen;
			$("#toggle-it").text(v_out2);
			change=false;
		}else{
			$("#image").hide("oculto");
			let v_text = $("#toggle-it").text();
			let v_out2 = idiomas.spOpen;
			$("#toggle-it").text(v_out2);
			change=false;
		}
	});
});
