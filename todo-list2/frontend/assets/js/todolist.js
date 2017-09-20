$(document).ready(function(){
	$("#active").on("click","li", function() {
		
		$("#inactive").append($(this));
		$(this).toggleClass("completado");
	});

	$("ul").on("click","span",function(event) {
		$(this).parent().fadeOut(1000, function(){
			$(this).remove();
		});
		event.stopPropagation();
	});

	$("input[type='text']").keypress(function(event){
		
		if(event.key == "Enter" && $(this).val() != "") {
			console.log(event.key)
			$("#active").append("<li><span><i class='material-icons'>delete</i></span>" + $(this).val() +  "</li>");
			$(this).val("");

			event.stopPropagation();
		}
	})
});