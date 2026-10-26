let frutas = [
    {"nombre": "manzana", "cantidad": 0, "precioKilo": 1.5},
    {"nombre": "pera", "cantidad": 3, "precioKilo": 2.0},
    {"nombre": "platano", "cantidad": 7, "precioKilo": 1.2},
    {"nombre": "naranja", "cantidad": 4, "precioKilo": 1.8},
    {"nombre": "melocoton", "cantidad": 6, "precioKilo": 2.5}
];


let outputFrutas = "";
let precioTotal = 0;
let log = "";

// print frutas disponibles
for (let i = 0; i < frutas.length; i++) {
    outputFrutas += frutas[i]["nombre"] + " - Cantidad: " + frutas[i]["cantidad"] + " - Precio por kilo: " + frutas[i]["precioKilo"] + "\n";
}
alert(outputFrutas)


// el usuario pide 3 frutas
let frutasSolicitadas = [String(prompt("Introduce la primera fruta:")).trim()];
frutasSolicitadas.push(String(prompt("Introduce la segunda fruta:")).trim());
frutasSolicitadas.push(String(prompt("Introduce la tercera fruta:")).trim());
alert("Frutas solicitadas: " + frutasSolicitadas[0] + ", " + frutasSolicitadas[1] + ", " + frutasSolicitadas[2]);

for (let i = 0; i < frutasSolicitadas.length; i++) {
    let encontrada = false;

    for (let j = 0; j < frutas.length; j++) {
        if (frutasSolicitadas[i] === frutas[j]["nombre"]) {
            encontrada = true;

            if (frutas[j]["cantidad"] > 0) {
                precioTotal += frutas[j]["precioKilo"];
            } else {
                log += "No hay disponibilidad de " + frutas[j]["nombre"] + "\n";
            }
            break;
        }
    }

    if (!encontrada) {
        log += "La fruta " + frutasSolicitadas[i] + " no está en la tienda.\n";
    }
}

alert("Precio total: " + precioTotal + "\n" + log);