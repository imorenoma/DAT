$(document).ready(function() {
	change = false;
      $("#toggle-it").click(function() {

		  if (change==false) {
		  	$("#image").show("oculto");
			let v_text = $("#toggle-it").text();
			let v_out = "Ocultar Foto";
			$("#toggle-it").text(v_out);
			change=true;
		}else{
			$("#image").hide("oculto");
			let v_text = $("#toggle-it").text();
			let v_out = "Mostrar Foto";
			$("#toggle-it").text(v_out);
			change=false;
		}

      });
});
