//let listaGenerica = [];

//let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python', 'Java', 'Ruby', 'GoLang'];

//function lenguaje(){
//console.log(lenguajesDeProgramacion);
//}

//console.log(lenguajesDeProgramacion);

function prom(arr){
let suma = 0;
for(let i =0; i < arr.length; i++){
    suma += arr[i];
    }
    return suma / arr.length;
}

let listilla = [1,2,3,4,5,6];
let media = prom(listilla);
console.log('media es:', media);