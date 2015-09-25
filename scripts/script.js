$ ("#explicacion").on("click", function() {
	$(".img").fadeIn();

})

$ ("#quitar").on("click", function() {
	$(".img").fadeOut();

})

$ ("#comenzar").on("click", function() {
	$(".todo").fadeIn();
	$(".rojo").fadeIn();
	$(".azul").fadeIn();

})

$ ("#finalizar").on("click", function() {
	$(".todo").fadeOut();
	$(".rojo").fadeOut();
	$(".azul").fadeOut();
	$("#resultados").empty();
	$("#buscar").empty();

})

$ ("#borrar").on("click", function () {
	$("#resultados").empty();
})

$("form").on("submit", function(event) {
	event.preventDefault();

	function secuencia(pos) {
		
		var b = 1

		if (pos === 1 || pos === 2){
			return b;
		} else {
			return secuencia (pos - 2) + secuencia(pos - 1)
			} 
		}

	var pos = parseInt($("input#buscar").val());
	var result = secuencia(pos);

	if (pos >= 1477) {
			$("#resultados").append("<li>Ese numero es muy grande, prueba algo menor</li>");
	} else {
		if (result % 2 === 0) {
			$("#resultados").append("<li class=par> El numero que corresponde a la posicion " + pos + "  es: " + result + "</li>");
		} else {
			$("#resultados").append("<li class=impar> El numero que corresponde a la posicion " + pos + "  es: " + result + "</li>");
		}	
	}
})
