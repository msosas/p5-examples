function esPar(n) {
	var c=0;
	var par=0;
	while (c<n) {
		var x = parseInt(prompt("Ingrese un numero: "));
		if(x%2 === 0) {
			par++;
		}
		c++;
	}
	console.log("la cantidad de numeros pares es " + par);
}