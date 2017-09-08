var mi_auto = {};
mi_auto.marca = "VolksWagen";
mi_auto.año = 2017;
mi_auto.nuevo = true;


var property_key = "modelo";

mi_auto[property_key] = "Golf";

var another_property_key = "precio";

mi_auto[another_property_key] = 423000;

var next_property = "color";

mi_auto[next_property] = "Negro";


for(var i in mi_auto) {
	console.log(i + ": " + mi_auto[i]);
}

