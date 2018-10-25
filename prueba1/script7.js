let u1_name = 'Ana';
let u1_surname = 'Gutiérrez';

let u2_name= 'Lara';
let u2_surname= 'Lares';

let u3_name= 'Paul';
let u3_surname= 'Paules';

console.log(u1_name+' '+u1_surname);
console.log(u2_name+' '+u2_surname);
console.log(u3_name+' '+u3_surname);

function generarNombreCompleto(unNombre,unApellido){
    let nombre_mod='*'+unNombre+'*';
    let app_mode='//'+unApellido+'//'
    return nombre_mod+' '+app_mode;
}

console.log(generarNombreCompleto(u1_name,u1_surname));
console.log(generarNombreCompleto(u2_name,u2_surname));
console.log(generarNombreCompleto(u3_name,u3_surname));
