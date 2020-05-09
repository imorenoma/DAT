$(document).ready(function(){
	$("#mostrar").click (function() {
		$(".texto").toggle();
	});

	$("#mostrar2").click (function() {
		$("#ul").toggle();
	});

	$("#mostrar3").click (function() {
		$("#cabecera").toggle();
		$("#ul").toggle();
		$("#backbutton").toggle();
		$("#nextbutton").toggle();
	});
});
