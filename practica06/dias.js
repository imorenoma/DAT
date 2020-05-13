$(document).ready(function() {

	$("#consulta").click(function(){
		let dia1;
		let fech_act;
		let diff_seg1, diff_seg2;
		let diff_dias, diff_horas, diff_minutos;
		let diff_dias2, diff_horas2, diff_minutos2;
		var dia = 86400; //dia en segundos
		var horas = 3600; //hora en segundo
		var minutos = 60;

		fech_act=new Date(); //fecha actual
		dia1=new Date(2020, 3, 11, 0, 0, 0); //fecha suspension clases
		dia2=new Date(2020, 3, 14, 0, 0, 0); //fecha estado de alarma

		/*CALCULO SUSENSION DE CLASES*/

		/*OPERACION DIAS*/
		diff_seg1 = (fech_act-dia1)/1000; //diferencia en segundos
		diff_dias = (diff_seg1 / dia).toFixed(0); //diferencia dias
		/*OPERACION HORAS*/
		diff_horas = (diff_seg1 /horas).toFixed(0);
		/*OPERACION Minutos*/
		diff_minutos = (diff_seg1 / minutos).toFixed(0);

		suspension = "dias: " + diff_dias + " Horas: " + diff_horas + " minutos: " + diff_minutos;


		myReg = '<tr class="element"><td>' + "11/03/2020" + '</td><td>' + suspension + '</td></tr>';
		$("#Registro").append(myReg);

		/*CALCULO ESTADO ALARMA*/

		diff_seg2 = (fech_act-dia2)/1000; //diferencia en segundos
		diff_dias2 = (diff_seg2 / dia).toFixed(0); //diferencia dias
		/*OPERACION HORAS*/
		diff_horas2 = (diff_seg2 /horas).toFixed(0);
		/*OPERACION Minutos*/
		diff_minutos2 = (diff_seg2 / minutos).toFixed(0);

		alarma = "dias: " + diff_dias2 + " Horas: " + diff_horas2 + " minutos: " + diff_minutos2;
		myReg2 = '<tr class="element"><td>' + "14/03/2020" + '</td><td>' + alarma + '</td></tr>';
		$("#Registro").append(myReg2);

		if($("table > tbody > tr").length >= 4){
				$(".element").remove();
		}

	})
});
