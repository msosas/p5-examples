var name, age, gender, isMember, thirsday, drinkname;
name = prompt("Buenas tardes, cuál es su nombre?");
gender = prompt("Su género?");
age = prompt("y cuál es su edad?");
isMember = prompt("Es Ud miembro?");

if (age < 21 || isMember == "no") {
	alert("Lo lamento, pero no puede ingresar...");
}
else if(gender === "F") {
	thirsday = prompt("Bienvenida " + name + ", tiene ud sed?");
}
else {
	thirsday = prompt("Bienvenido " + name + ", tiene ud sed?");
}
if (thirsday == "si") {
	drinkname = prompt("Qué le gustaría tomar?");
	if (drinkname !== "Coors Light") {
		alert("Sí, " + name + " un " + drinkname + " viniendo!")
	}
	else {
		alert("Váyase ahora mismo");
	}
}

