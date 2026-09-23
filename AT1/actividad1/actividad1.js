let numero1 = Number(prompt("Introduce el primer número:"));
let numero2 = Number(prompt("Introduce el segundo número:"));

if (numero1 > numero2) {
	alert("El mayor es " + numero1);
} else if (numero2 > numero1) {
	alert("El mayor es " + numero2);
} else {
	alert("Los dos números son iguales");
}
