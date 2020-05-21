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

		/*OPERACION DIFERENCIA DE MESES*/

		var suspensionMes = dia1.getMonth();
		var suspensionMes2 = fech_act.getMonth();
		diff_meses = (suspensionMes2 - suspensionMes)+1;

		/*OPERACION DIAS*/
		diff_seg1 = (fech_act-dia1)/1000; //diferencia en segundos
		diff_dias = (diff_seg1 / dia).toFixed(0); //diferencia dias
		/*OPERACION HORAS*/
		diff_horas = (diff_seg1 / horas).toFixed(0);
		/*OPERACION Minutos*/
		diff_minutos = (diff_seg1 / minutos).toFixed(0);

		diff_tot_dias = (diff_dias * diff_meses)-11;
		/*Con esto lo que hacemos es calcular el numero de dias transcurridos en tantos meses
		le hemos restado 11 dias porque la suspension no empezo el dia 1, es decir, con esto estamos
		contado solo los 20 dias del primer mes*/

		/*REPRESENTACION EN EL HTML DE LA SUSPENSION DE CLASES*/
		/*-------------------------------------------------------------------------------------------*/
		suspension = "dias: " + diff_tot_dias + " Horas: " + diff_horas + " minutos: " + diff_minutos;

		myReg = '<tr class="element"><td>' + "11/03/2020" + '</td><td>' + suspension + '</td></tr>';
		$("#Registro").append(myReg);
		/*-------------------------------------------------------------------------------------------*/


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
		/*CALCULO ESTADO ALARMA*/

		diff_seg2 = (fech_act-dia2)/1000; //diferencia en segundos
		diff_dias2 = (diff_seg2 / dia).toFixed(0); //diferencia dias

		/*OPERACION MESES ESTADO DE ALARMA*/
		var alarmaMes = dia2.getMonth();

		/*OPERACION HORAS*/
		diff_horas2 = (diff_seg2 /horas).toFixed(0);
		/*OPERACION Minutos*/
		diff_minutos2 = (diff_seg2 / minutos).toFixed(0);


		diff_est_alarm = (suspensionMes2 - alarmaMes) + 1;
		diff_tot_alarm = (diff_dias2 * diff_est_alarm) - 8;

		/*REPRESENTACION EN EL HTML DEL ESTADO DE ALARMA*/
		/*-------------------------------------------------------------------------------------------*/
		alarma = "dias: " + diff_tot_alarm + " Horas: " + diff_horas2 + " minutos: " + diff_minutos2;
		myReg2 = '<tr class="element"><td>' + "14/03/2020" + '</td><td>' + alarma + '</td></tr>';

		$("#Registro").append(myReg2);

		if($("table > tbody > tr").length >= 4){
				$(".element").remove();
		}
		/*-------------------------------------------------------------------------------------------*/
	})
});
