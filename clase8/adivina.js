var n = parseInt(prompt("Ingresar un numero"));



var random = Math.floor(Math.random() * n);

var guess = parseInt(prompt("Adivina el numero"));


while(guess !== random) {
	var guess = parseInt(prompt("Adivina el numero"));
}
alert("correcto!");

