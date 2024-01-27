//let estaRegistrado = prompt("¿Esta registrado? responde si o no")
//let esMayorDeEdad = prompt("¿Es mayor de edad? conteste si o no")

//if (estaRegistrado === "si" && esMayorDeEdad === "si" ){

//console.log("bienvenido a la web")
//}else{
    //console.log("acceso denegado")
//}

    const tienesEntrada= prompt("¿Tienes entrada? responde si o no")
    const eresMayorDeEdad=prompt("¿Es mayor de edad? responde si o no") 

    if (tienesEntrada === "si" && eresMayorDeEdad ==="si"){
        console.log ("Puedes ver el partido")
    }else{
        console.log("No puedes pasar eres menor")
    }


    for(let i =6; i < 14; i++) {
        if(i % 6 ==0 ) {
            console.log("numero par", i);
        }
    }

    function dividir(){
        return 24 / 6;
    }
    let resultado =dividir();
    console.log(resultado);