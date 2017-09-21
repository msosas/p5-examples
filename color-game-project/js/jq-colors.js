$(document).ready(function() {
	var squareNumber = 6;
	var colors = generateColors();
	var pickedColor = pickColor();



	function pickColor(){
		var random = Math.floor(Math.random()*colors.length);
		return colors[random]; 
	};

	function randomColor() {
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);

		return "rgb(" + r + ", " + g + ", " + b + ")";
	};


	function generateColors() {
		var arry = [];
		for (var i = 0; i < squareNumber; i++) {
			arry[i] = randomColor();
		}
		return arry;
	};		



	$('#color-display').append(pickedColor);

	$('.square').each(function(index) {
		$(this).css('backgroundColor',colors[index]);
	});


	$('.square').click(function() {
		var clickedColor = $(this).css('backgroundColor');

		if (clickedColor  ==  pickedColor) {
			$('.square').css('backgroundColor',pickedColor);
		}
		else {
			$(this).slideDown(1000)

		}
		
	});
	
});