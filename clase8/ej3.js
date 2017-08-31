var min;
var max;
var counter = 0;


var num1 = prompt("ingresar valor 1");
var num2 = prompt("ingresar valor 2");
var num3 = prompt("ingresar valor 3");
var num4 = prompt("ingresar valor 4");
var num5 = prompt("ingresar valor 5");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
num4 = parseInt(num4);
num5 = parseInt(num5);

/*var num1 = 1;
var num2 = 55;
var num3 = 67;
var num4 = 3;
var num5 = 100;
*/
console.log(num1, num2, num3, num4, num5);
min = num1;
max = num1;


if(num2 > max) {

	max = num2;
}
if (num3 > max) {
	max = num3;
}
if (num4 > max) {

	max = num4;
}
if (num5 > max) {
	console.log("sapo");
	max = num5;
}

alert("el mayor numero ingresado es: " + max);