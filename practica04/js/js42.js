$(document).ready(function(){
	$("#cm").click (function() {
		let v_text=$("#v_in").text();
        let v_out=pasocm(v_text)+ " cm";
		$("#v_out").text(v_out);
	});

	$("#inch").click (function() {
		let v_text=$("#v_in").text();
        let v_out=pasopulg(v_text);
		v_out = v_out.toFixed(2);
		v_out = v_out + " in"
		$("#v_out").text(v_out);
	});

	$("#yd").click (function() {
		let v_text=$("#v_in").text();
        let v_out=pasoyard(v_text);
		v_out = v_out.toFixed(2);
		v_out = v_out + " yd"
		$("#v_out").text(v_out);
	});
});
