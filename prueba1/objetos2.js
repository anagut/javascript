// var persona1 ={
//     id: 1,
//     nombre: 'Persona1',
//     edad: 25,
// }

// var persona2 ={
//     id: 2,
//     nombre: 'Persona2',
//     edad: 25,
// }

// var persona3 ={
//     id: 3,
//     nombre: 'Persona3',
//     edad: 25,
// }

// var persona4 ={
//     id: 4,
//     nombre: 'Persona4',
//     edad: 25,
// }

// var persona5 ={
//     id: 5,
//     nombre: 'Persona5',
//     edad: 25,
// }

// var personas = [persona1, persona2, persona3, persona4, persona5];
// var datos =[];

// for (let i = 0; i < personas.length; i++) {
//     datos = '['+personas[i].id+'] '+personas[i].nombre+', '+personas[i].edad;
//     console.log(datos)
// }

// var clase = [
//     {id: 1, nombre: 'Persona1', edad: 21},
//     {id: 2, nombre: 'Persona2', edad: 22},
//     {id: 3, nombre: 'Persona3', edad: 23},
//     {id: 4, nombre: 'Persona4', edad: 24},
//     {id: 5, nombre: 'Persona5', edad: 25},
// ]

// for (let i = 0; i < clase.length; i++) {
//     console.log('['+clase[i].id+'] '+clase[i].nombre+', '+clase[i].edad);
// }

// for (let i = 0; i < clase.length; i++) {
//     var str_to_show = '['+clase[i].id+'] '+clase[i].nombre+', '+clase[i].edad;
//     console.log(str_to_show)
// }

// let gente =[
//     {id: 1, nombre: 'Persona1', edad: 21, showInfo: function(){
//         return '[' + this.id + ']' + this.nombre + ', '+this.edad;}},
//     {id: 2, nombre: 'Persona2', edad: 22, showInfo: function(){
//         return '[' + this.id + ']' + this.nombre + ', '+this.edad;}},
//     {id: 3, nombre: 'Persona3', edad: 23, showInfo: function(){
//         return '[' + this.id + ']' + this.nombre + ', '+this.edad;}},
//     {id: 4, nombre: 'Persona4', edad: 24, showInfo: function(){
//         return '[' + this.id + ']' + this.nombre + ', '+this.edad;}},
//     {id: 5, nombre: 'Persona5', edad: 25, showInfo: function(){
//         return '[' + this.id + ']' + this.nombre + ', '+this.edad;}},
// ]

// for (let index = 0; index < gente.length; index++) {
//     console.log(gente[index].showInfo());
// }

//ES5
let Persona = function(id,nom,ed){
    this.id=id;
    this.nombre=nom;
    this.edad=ed;
    this.showInfo= function(){
        return '[' + this.id + '] ' + this.nombre + ', '+this.edad;}
}

// let person1=new Persona();
// ana.id= 1;
// ana.nombre='Person1';
// ana.edad=31;

let clase2= [
    new Persona(2,'Person2',32),
    new Persona(3,'Person3',33),
    new Persona(4,'Person4',34),
];

for (let index = 0; index < clase2.length; index++) {
    console.log( clase2[index].showInfo() );
    
}
 
//ES6
class Pers {
    constructor(id,nom,ed){
        this.id = id;
        this.nombre = nom;
        this.edad = ed;
    }
    showInfo(){ //la función pasa a ser un método dentro de la case
        return '[' + this.id + '] ' + this.nombre + ', '+this.edad;}
}

let clase3= [
    new Pers(1,'Personita1',51),
    new Pers(2,'Personita2',52),
    new Pers(3,'Personita3',53),
    new Pers(4,'Personita4',54),
]

for (let index = 0; index < clase3.length; index++) {
    console.log( clase3[index].showInfo() );
}