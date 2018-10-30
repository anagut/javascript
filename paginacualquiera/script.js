var texto = document.getElementById('muchotexto');
var titulo = document.getElementById('titulo');

var botonupper = document.getElementById('mayusculas');
botonupper.onclick = function() {
    texto.innerHTML = texto.innerHTML.toUpperCase();
    titulo.innerHTML = titulo.innerHTML.toUpperCase();
}

var botonlower = document.getElementById('minusculas');
botonlower.onclick = function(){
    texto.innerHTML = texto.innerHTML.toLowerCase();
    titulo.innerHTML = titulo.innerHTML.toLowerCase();    
}

var botonsentence = document.getElementById('sentence');
botonsentence.onclick = function(){
    
}