var ana = {
    nombre: 'Ana',
    apellido: 'Gutiérrez',
    email: 'a@a.es',
    edad: 26,
    gustadormir: true,
    duermelonecesario: false,
    saludar: function(){
        return 'Hola, me llamo '+this.nombre+'; tengo'+this.edad+'años y me gusta dormir.';
    }
}

var rocio = {
    nombre: 'Merche',
    apellido: 'Martínez',
    email: 'm@m.es',
    edad: 24,
    gustadormir: true,
    duermelonecesario: true
}

console.log(ana);
console.log(ana.apellido);
console.log('Le gusta dormir',ana.gustadormir)

console.log(rocio);
console.log(rocio.email)

console.log(ana.saludar)