'use strict'

/**LOCAL UTC UTC LOCAL*/

function localUtc(local_Utc){

	var year = local_Utc.getFullYear();
	var month = local_Utc.getMonth();
	var day = local_Utc.getDay();
	var hour = local_Utc.getHours();
	var minute = local_Utc.getMinutes();
	var second = local_Utc.getSeconds();

	let to_utc = Date.UTC(year, month, day, hour, minute, second);

	let my_utc = new Date(to_utc);
	console.log("Local to UTC: " + my_utc);
	console.log();
	utcLocal(my_utc);
}

function utcLocal(uct_Local){

	var year = uct_Local.getUTCFullYear();
	var month = uct_Local.getUTCMonth();
	var day = uct_Local.getUTCDay();
	var hour = uct_Local.getUTCHours();
	var minute = uct_Local.getUTCMinutes();
	var second = uct_Local.getUTCSeconds();

	let to_local = new Date(year, month, day, hour, minute,second);
	console.log("UTC to Local: " + to_local);
}

/*LOCAL UNIX UNIX LOCAL */

function localUnix(local_unix){

	let to_Unix = local_unix.getTime() / 1000;
	console.log("Local to Unix :" + to_Unix.toFixed(0));
	console.log();
	unixLocal(to_Unix);

}


function unixLocal(unix_local){

	let to_local = new Date(unix_local * 1000);
	console.log("Unix to Local: " + to_local);

	unixUtc(to_local);

}

/*UNIX UTC UTC UNIX*/

function unixUtc(unix_Utc){
	let local = unix_Utc; //nos viene ya convertido de unix a local

	var year = local.getFullYear();
	var month = local.getMonth();
	var day = local.getDay();
	var hour = local.getHours();
	var minute = local.getMinutes();
	var second = local.getSeconds();

	let utc = Date.UTC(year, month, day, hour, minute, second);
	let my_utc = new Date(utc);

	console.log();
	console.log("UNIX to UTC :" + my_utc);
	console.log();
	utcUnix(my_utc);
}

function utcUnix(utc_Unix){

	let to_Unix = utc_Unix.getTime() / 1000;
	console.log("UTC to Unix :" + to_Unix.toFixed(0));


}

var date = new Date();

console.log("Local: " + date);
console.log();

localUtc(date);

console.log();

localUnix(date);
