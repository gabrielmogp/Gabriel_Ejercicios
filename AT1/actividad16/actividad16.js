let frutas = [
    {"nombre": "manzana", "cantidad": 5, "precioKilo": 1.5},
    {"nombre": "pera", "cantidad": 3, "precioKilo": 2.0},
    {"nombre": "plátano", "cantidad": 7, "precioKilo": 1.2},
    {"nombre": "naranja", "cantidad": 4, "precioKilo": 1.8},
    {"nombre": "melocoton", "cantidad": 6, "precioKilo": 2.5}
];

// print frutas disponibles
let outputFrutas = "";
for (let i = 0; i < frutas.length; i++) {
    outputFrutas += frutas[i]["nombre"] + " - Cantidad: " + frutas[i]["cantidad"] + " - Precio por kilo: " + frutas[i]["precioKilo"] + "\n";
}
alert(outputFrutas)

