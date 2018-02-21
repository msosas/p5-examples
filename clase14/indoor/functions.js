var color = [
	'rgb(133, 221, 15)',
	'rgb(133, 221, 15)',
	'rgb(133, 221, 15)',
	'rgb(133, 221, 15)',
	'rgb(133, 221, 15)',
	'rgb(133, 221, 15)'
]

var pickedColor = color[3];
var $square = document.querySelectorAll('.square');

for (var i = 0; i < $square.length; i++) {
	$square[i].style.backgroundColor = color[i];
}


for (var i = 0; i < $square.length; i++) {
	$square[i].addEventListener('click', function() {

		var clickedColor = this.style.backgroundColor;
	
		
	})
}
document.querySelector('#color-display').innerText = pickedColor;