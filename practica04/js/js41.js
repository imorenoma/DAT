$(document).ready(function(){
	$("#mostrar").on( "click", function() {
		$('.texto').toggle();
	});

	$("#mostrar2").on( "click",function(){
		$('#ul').toggle();
	})

	$("#mostrar3").on( "click", function(){
		$('#ul').toggle();
		$('#cabecera').toggle();
	})

});
