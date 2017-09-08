var nave = {
	tipo: "espacial",
	pais: "haiti",
	"cantidad de tripulantes": 8,
	tripulantes: ["matias","pablo","cristian","toni"],
	estado: "usada",
	despegar: function() {
		console.log("Despegue en 3,2,1... OH NO, ESPEREN, ALGO SE ROMPIO!");
		alert("BOOOOOM!!!!");
	},
	getEverthing: function() {
		for(var i in this) {
			console.log(this[i]);
		}
	}
}