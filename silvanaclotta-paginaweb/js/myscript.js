$(document).ready(function(){
	//Mostrar descripcion de las fotos cuando el mouse esta sobre ellas
	$(".cuadro-container").hover(function(){
		$(this).children(".descripcion").toggle();
	});
	//--------------------------------------------//
	
	//Mostrar imagen clickeada en un Modal
	$(".cuadro-container").click(function(){
		$(".modal").css("display", "flex");
		$(".modal-content").attr("src", $(this).children("img").attr("src")); 
	});
	$(".modal").click(function(){
		$(".modal").css("display", "none");
	});
});