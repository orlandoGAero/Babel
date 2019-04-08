const areaRect = (b,h) => b*h;
console.log(areaRect(3,3));

console.log(7**2);

class Corredor {
	constructor(nombre, kilometros, horas) {
		this.nombre = nombre;
		this.kilometros = kilometros;
		this.horas = horas;
		this.setSpeed(kilometros, horas);

	}

	setSpeed(km, hr) {
		this.speed = km / hr;
	}
}

function unshift(items, ...candidates) {
	return [...candidates, ...items];
}

let fruits = ["kiwi", "melon", "fresa"];
let result =unshift(fruits, "platano", "manzana");

console.log(result);

const autos = ["bmw", "audi", "ferrari", "porsche"];
autos.forEach(auto => console.log(auto));