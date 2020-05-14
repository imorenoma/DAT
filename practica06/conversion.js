'use strict'

function unixLocal(){


}

function unixUtc(){

}

function localUtc(lc){

}

function localUnix(){

}

function utcLocal(date){

	var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();
	new Date.setHours(hours - offset);

  	return new Date;
}

function utcUnix(){

}


let unix;
let utc;

var local = new Date(); //hora local
var date = utcLocal(new Date(local));

localUtc(local);
