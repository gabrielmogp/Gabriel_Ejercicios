function hacerMedia(notasGrupo){
    let total = 0;
    for (let i = 0; i< notasGrupo.length ; i ++){
        total += notasGrupo[i];
    }

    return total/notasGrupo.length;
}

function aleatorio(num){
    return (Math.random()*num).toFixed(0);
}

function rellenarNotas(){
    let notasAPasar =[];
    for (let i = 0; i< aleatorio(30) ; i ++){
        notasAPasar.push(aleatorio(10));
    } 
    return notasAPasar;   
}


let grupos ={
    "daw1" : hacerMedia(rellenarNotas()),
};

let notasGrupo = [6,8,0,8,10];

//alert((Math.random()*10).toFixed(0));

alert(hacerMedia(rellenarNotas()));