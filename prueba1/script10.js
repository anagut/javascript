function concatener (str1,str2){
    return str1+' '+str2;}

console.log(concatener('Hola','mundo'));

// ES6
// let : variables
// const : constantes

const concatenar2 = function(str1,str2){
    return str1+' '+str2;
}

console.log (concatenar2('Hola2','Mundo2'))

//funciones anónimas, se pone entre paréntesis para autoinvocarla
(function (texto) {
    console.log(texto)
})('Holi')

