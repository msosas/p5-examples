$(document).ready(function(){
	//Check element
	$('#pending-list').on('click','li', function() {
		$(this).toggleClass('checked')
		$('#checked-list').append($(this));
	});
	$('#checked-list').on('click','li', function() {
		$(this).toggleClass('checked')
		$('#pending-list').append($(this));
	});
	// Delete element
	$('ul').on('click','span', function(event) {
		$(this).parent().fadeOut(500, function() {
			$(this).remove();
		});
		event.stopPropagation();
	});
	// New elements
	$('input[type="text"]').on('keypress', function(event) {
		var newItem = '<li class="list-group-item">' + $(this).val() + '<span><i class="material-icons">delete</i></span></li>'
		console.log(event);
		if (event.key == 'Enter') {
			$('#pending-list').append(newItem)
		}
		event.stopPropagation();
	});
}) 