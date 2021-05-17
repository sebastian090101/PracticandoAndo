$(document).ready(function(){
alert("cargando...");
}); 

$("#c1").click(function() {
$("#cont1").hide(1500);
});

$("#draggable").draggable();
$("#draggable").resizable();

//Efectos
$("#c1").click(function() {
$("#effect").effect("explode",2000).effect("drop",2000).effect("clip",2000).effect("puff",2000).effect("blind",2000).effect("fold",2000).effect("highlight",2000).effect("pulsate",2000).effect("scale",2000).effect("fade",2000);
});

//Tooltip
$( "#tooltip" ).tooltip();

//Widget Acordeon
$( "#accordion" ).accordion();

//PestaÃ±as (tabs)
$( "#tabs" ).tabs();

//Widget Calendario
$( "#datepicker" ).datepicker({
	inline: true
}); 