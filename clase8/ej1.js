	var secretNumber = 8;

	var userNum = prompt("Adivina el número...!");
	userNum = Number(userNum);

	console.log("ingresaste el " + userNum);

	if (secretNumber === userNum) {
		alert("CORRECTO!!");
	}
	else {
		alert("Intentá de nuevo...");
	}