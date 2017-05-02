// JavaScript Document

$(document).ready(function(e){
document.addEventListener("deviceready",function(){

$('#beep').tab(function(){
navigator.notification.beep(2);	
});//tab beep

$('vibrar').tab(function(){
	navigator.notification.vibrate(2000);	
});//tab vibrar

},false);//deviceready
});//ready
	