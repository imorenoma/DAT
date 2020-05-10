$(document).ready(function() {

	var idiomas = {japOpen : "示す", japClose: "隠す" , ingOpen : "Show", ingClose :"Hide", spOpen : "Mostrar", spClose : "Ocultar"};
	change = false;
	jap = false;
	gb = false;
	esp=false;

		$(".jap").click(function(){
			jap = true;
		});

      $("#toggle-it").click(function() {
		  if (change==false && jap==false && gb ==false) {
		  	$("#image").show("oculto");
			let v_text = $("#toggle-it").text();
			let v_out = idiomas.spClose;
			$("#toggle-it").text(v_out);
			change=true;
		}else if (change==false && jap==true && gb==false) {
			$("#image").show("oculto");
			let v_text = $("#toggle-it").text();
			let v_out = idiomas.japClose;
			$("#toggle-it").text(v_out);
			change=true;
		}else if (change==true && jap==true && gb==false) {
			$("#image").hide("oculto");
			let v_text = $("#toggle-it").text();
			let v_out2 = idiomas.japOpen;
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




/*
$(".jap").click(function(){
	if(change == false){
	   let v_text = $("#toggle-it").text();
	   let v_out = "示す";
	   $("#toggle-it").text(v_out);
	   change = true;
   }else{
	   let v_text = $("#toggle-it").text();
	   let vout="隠す";
	   $("#toggle-it").text(v_out);
	   change = false;
   }
});

	 $(".gb").click(function(){
		 let v_text = $("#toggle-it").text();
		 let v_out = "Show";
		 $("#toggle-it").text(v_out);
	 });

	 $(".esp").click(function(){
		 let v_text = $("#toggle-it").text();
		 let v_out = "mostrar";
		 $("#toggle-it").text(v_out);
	 });
	 */
