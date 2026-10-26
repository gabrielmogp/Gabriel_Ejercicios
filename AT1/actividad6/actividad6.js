
let noms;
let grupos;

function inicializarGrupos(noms, grupos){
     noms = ["dam1", "dam2", "daw1", "daw2", "smr1", "smr2", "asir1", "asir2"];

     grupos =  [
    hacerMedia(rellenarNotasGrupo()),
    hacerMedia(rellenarNotasGrupo()),
    hacerMedia(rellenarNotasGrupo()),
    hacerMedia(rellenarNotasGrupo()),
    hacerMedia(rellenarNotasGrupo()),
    hacerMedia(rellenarNotasGrupo()),
    hacerMedia(rellenarNotasGrupo()),
    hacerMedia(rellenarNotasGrupo())
    ];
}

function hacerMedia(notasGrupo){
    let total = 0;
    for (let i = 0; i< notasGrupo.length ; i ++){
        total += Number(notasGrupo[i]) ;
    }

    return (total/notasGrupo.length).toFixed(2);
}

function generarNumAleatorio(num){
    return Math.floor(Math.random()*num);
}

function generarNumAleatorio2(min, max){
    return min + Math.floor(Math.random()* (max - min));
}

function rellenarNotasGrupo(){
    let notasAPasar =[];
    let cantidadNotas = generarNumAleatorio2(10, 30);
        console.log(cantidadNotas);

    for (let i = 0; i< cantidadNotas ; i ++){
        notasAPasar.push(generarNumAleatorio( 10));
    } 
    return notasAPasar;   
}

function comprobarMayor(mediasGrupos){

    let mayor = mediasGrupos[0];
    
    for (let i = 0; i< mediasGrupos.length ; i ++){
        if(mediasGrupos[i] > mayor) mayor = mediasGrupos[i] ;
    } 

    return mayor;
}

/*function inicializarGrupos(){
    let noms = [];
    let grupos ={
    "daw1" : hacerMedia(rellenarNotasGrupo()),
    "daw2" : hacerMedia(rellenarNotasGrupo()),
    "dam1" : hacerMedia(rellenarNotasGrupo()),
    "daw2" : hacerMedia(rellenarNotasGrupo()),
    "smr1" : hacerMedia(rellenarNotasGrupo()),
    "smr2" : hacerMedia(rellenarNotasGrupo()),
    "asir1" : hacerMedia(rellenarNotasGrupo()),
    "asir2" : hacerMedia(rellenarNotasGrupo())
    };
}
    */

inicializarGrupos();

alert(grupos[0] + "\n" +
    grupos[1] + "\n" +
    grupos[2] + "\n" +
    grupos[3] + "\n" +
    grupos[4] + "\n" +
    grupos[5] + "\n" +
    grupos[6] + "\n" +
    grupos[7] + "\n" +

     "el mayor: " + comprobarMayor(grupos));


 