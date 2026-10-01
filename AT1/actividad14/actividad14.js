
let notas = [String(prompt("Introduce las notas del primer trimestre:")).split(",").map(Number),
 String(prompt("Introduce las notas del segundo trimestre:")),
String(prompt("Introduce las notas del tercer trimestre:"))];
let resultados = [];
var aprobado = true;
var log =notas +"\n";

for(let i = 0 ; i<notas.length ; i ++){
    var tieneRecuperacion = notas[i][3] != 0;
    
    if (tieneRecuperacion){
        resultados[i] = notas[i][3]>=50
        log=log.concat("tiene recu")

    } else{
        var sumatorio = 0;
        for(let j = 0 ; j<notas[i].length-1 ; j ++){
            sumatorio = sumatorio + notas[i][j]
        }

        var notaMedia = sumatorio/3

        if(i == 0){
            resultados[i] = notaMedia>=70;

        }else if(i == 1){
            resultados[i] = notaMedia>=60;

        }else{
            resultados[i] = notaMedia>=50;

        }
        
        log=log.concat("==="+ notaMedia)
    }

    
}

for(let i = 0 ; i<resultados.length ; i ++){
    if (resultados[i] == false){
        log = log.concat("\n El alumno ha suspendido")
        break

    }else{
        log = log.concat("\n El alumno ha aprobado")

    }
}


alert(resultados + "\n" + log + "\n");




