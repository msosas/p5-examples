function holaMundo() {
	console.log("Hola Mundo!");
};

var test = function(name) {
	console.log("hola " + name + "!!");
};

holaMundo();
test("Matias");

(function(name="juan perez") {
	console.log(name + ", soy auto-convocada!!");
})("");

var empty;
console.log(empty);
if(empty === null) console.log("es null");
if (empty=== 0) console.log("es cero");
if (empty === undefined) { console.log("es undefined"); }

