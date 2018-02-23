$(document).ready(function () {
	
	// Checked
	$('#pending-items').on('click','li',function() {
		$(this).toggleClass('checked');
		$('#checked-items').append($(this));
	});
	$('#checked-items').on('click','li',function() {
		$(this).toggleClass('checked');
		$('#pending-items').append($(this));
	});

	// Delete
	$('#pending-items').on('click','span',function(event){
		$(this).parent().fadeOut(500, function() {
			$(this).remove();
		})
		event.stopPropagation();
	})

	//New item
	$('input').keypress(function(event) {
		if(event.key == 'Enter' && ($(this).val().trim() !== '')) {
			var inputValue = $(this).val();
			var $li = '<li class="list-group-item">' + inputValue + '<span><i class="material-icons">delete</i></span></li>'
			$('#pending-items').append($li);
			$(this).val('');
		}
		
	})
});