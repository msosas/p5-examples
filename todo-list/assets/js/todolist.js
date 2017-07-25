$(document).ready(function() {
	/*$('li').click(function() {
		$(this).toggleClass("completado");
	});

	$('span').click(function(event) {
		$(this).parent().fadeOut(500, function() {
			$(this).remove();
		});
		//event.stopPropagation();
	});*/

	$("input[type='text'").keypress(function(event) {
		if (event.key=='Enter') {
			$('ul').append("<li>" + $(this).val() + "&nbsp;<span><i class='fa fa-trash' aria-hidden='true'></i></span></li>");
			$(this).val("");
		}
		//event.stopPropagation();
	})

	$('ul').on('click', 'li', function() {
		$(this).toggleClass("completado");
		
	});

	$('ul').on('click', 'span', function(event){
		$(this).parent().fadeOut(500, function(){
			$(this).remove();
		})
		event.stopPropagation();
	});
});