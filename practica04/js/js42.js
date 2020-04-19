$(document).ready(function(){
   $("#cm").click(function() {
      numero=$("#num").html();
	  v_out = pasocm(numero);
	  $("#v_out").html(v_out);
   });
});
