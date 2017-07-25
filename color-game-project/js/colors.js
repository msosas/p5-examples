//var colors = ["white", "green", "blue", "red", "yellow", "orange"];

var squareNumber = 6;
var colors = generateColors();
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();


for (var i = 0; i<squares.length;  i++) {
	squares[i].style.backgroundColor = colors[i];

	//Agregar evento
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		
		if (clickedColor == pickedColor) {
			document.getElementById("message").textContent = "Correct!!"
			document.querySelector("h1").style.backgroundColor = clickedColor;

			var squares = document.querySelectorAll(".square");
			for (var i = 0; i < squares.length; i++) {
			  squares[i].style.backgroundColor = clickedColor;
			}	
		}
		else {
			this.style.backgroundColor =  "#232323";
			document.getElementById("message").textContent = "Try Again!!"
		}
	});
}

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

document.getElementById("color-display").textContent=pickedColor;


function selectButton(mode) {
	if (mode == "hard") {
		document.getElementById("easy-button").classList.remove("selected");	
		document.getElementById("hard-button").classList.add("selected");	
	}
	else {
		document.getElementById("hard-button").classList.remove("selected");
		document.getElementById("easy-button").classList.add("selected");
		squareNumber = 3;
		reset();	
	}
};

function reset() {
	squares = generateColors();
};