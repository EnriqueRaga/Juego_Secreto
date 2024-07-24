let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste maifren en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);  
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p','el numero secreto es menor');
        } else {
         asignarTextoElemento('p','el numero secreto es mayor');
        } 
        intentos++;
        limpiarCaja();
        
        
    }
        return;
}

function limpiarCaja() {
   document.querySelector('#valorUsuario').value = ''; 
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado está incluido en la lista 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sortearon todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "ya se sortearon todos los numeros posibles");
    }else{

    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}
function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto dude!")
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo} maifren`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    // generar el numero aleatorio
    //iniciabiliazar el numero de intentos
    condicionesIniciales();
    //deshabilitar boton de juego nuevo
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();

