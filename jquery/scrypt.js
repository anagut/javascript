console.log($('#holabtn').html());

//$: Idempotente

// $('#holabtn').click(function () {
//     alert('Hola!!')
// } );


$('h1').html('Holiiii').click(function (){
    alert('Este es el título')
}).html('Otro título');


//lo que recibo del servidor
let amigos = [
{name: 'Ricardo', email: 'r@r.es'},
{name: 'Petra', email: 'p@p.es'},
{name: 'Luisi', email: 'l@l.es'},
{name: 'Alfonso', email: 'a@a.es'},
]

$('#amigos').html(function () {
    let htmlAmigos='';
    amigos.forEach(unAmigo => {
        htmlAmigos += `<li>${unAmigo.name} ${unAmigo.email}</li>
        <button class='saluda' data-value=${unAmigo.name}>${'Saludar'}</button>`
    })
    return htmlAmigos;
});


$('.saluda').click(function () {
    alert('¡Hola, '+ $(this).attr('data-value')+'!');
})


// $('#amigos').html(function () {
//     let htmlAmigos='';
//     amigos.forEach(unAmigo => {
//         htmlAmigos += `<li>${unAmigo.name} ${unAmigo.email}</li>
//         <button class='saluda' data-value=${unAmigo.name}>Saludar</button>`
//     })
//     return htmlAmigos;
// }).children().click( function() {
//     alert('¡Hola, '+ $(this).attr('data-value')+'!')
// })

$('#holabtn').click(function() {
    $('#amigos').toggle();
})