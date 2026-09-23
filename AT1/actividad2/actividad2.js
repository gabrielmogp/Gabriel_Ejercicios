let n1 = Number(prompt("Introduce el primer número:"));
let n2 = Number(prompt("Introduce el segundo número:"));
let n3 = Number(prompt("Introduce el tercer número:"));
let n4 = Number(prompt("Introduce el cuarto número:"));
let n5 = Number(prompt("Introduce el quinto número:"));

let mayor;
let candidato1 = n2;
let candidato2 = n4;
let posicionC1 = "";
let posicionC2 ="";
let posicionFinal = "";



if (candidato1 < n3){
    candidato1 = n3;
    posicionC1 = "tercero";
} else{
    posicionC1= "segundo";
}

if (candidato2 < n5){
    candidato2 = n5;
    posicionC2 = "quinto";
} else{
    posicionC2= "cuarto";
}

if (candidato1 < candidato2){
    mayor = candidato2;
    posicionFinal = posicionC2;
}else{
    posicionFinal = posicionC1;
}

if (mayor < n1){
    mayor = n1;
    posicionFinal = "primero"
}

alert("el numero mas alto es el: " + posicionFinal + " ("+mayor+")")