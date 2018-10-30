// $('#cargarbtn').click(function () {
//     $.ajax({
//         url: "http://www.mocky.io/v2/5bd84ae83100002414474d3c",
//     }).done(function (amigosFromServer) {
//         console.log(amigosFromServer);
//         //inyectar amigos
//         $('#amigos').html(function () {
//             let htmlAmigos = '';
//             amigosFromServer.forEach(unAmigo => {
//                 htmlAmigos += `<li>${unAmigo.name} ${unAmigo.email}</li>
//             <button class='saluda' data-value=${unAmigo.name}>${'Saludar'}</button>`
//             })
//             return htmlAmigos;
//         });
//         $('.saluda').click(function () {
//             alert('¡Hola, '+$(this).attr('data-value')+'!');
//         })
//     })
// });

// $('#botonFb').click(function () {
//     $.ajax({
//         url: "http://www.mocky.io/v2/5bd84ae83100002414474d3c",
//     }).done(function (amigosFromServer) {
//         console.log(amigosFromServer);
//         //inyectar amigos
//         $('#amigosFb').html(function () {
//             let htmlAmigos = '';
//             amigosFromServer.forEach(unAmigo => {
//                 htmlAmigos += `<li>${unAmigo.name} ${unAmigo.email}</li>
//             <button class='saluda' data-value=${unAmigo.name}>${'Saludar'}</button>`
//             })
//             return htmlAmigos;
//         });
//         $('.saluda').click(function () {
//             alert('¡Hola, '+$(this).attr('data-value')+'!');
//         })
//     })
// });

// $('#botonSp').click(function () {
//     $.ajax({
//         url: "http://www.mocky.io/v2/5bd84ae83100002414474d3c",
//     }).done(function (amigosFromServer) {
//         console.log(amigosFromServer);
//         //inyectar amigos
//         $('#amigosSp').html(function () {
//             let htmlAmigos = '';
//             amigosFromServer.forEach(unAmigo => {
//                 htmlAmigos += `<li>${unAmigo.name} ${unAmigo.email}</li>
//             <button class='saluda' data-value=${unAmigo.name}>${'Saludar'}</button>`
//             })
//             return htmlAmigos;
//         });
//         $('.saluda').click(function () {
//             alert('¡Hola, '+$(this).attr('data-value')+'!');
//         })
//     })
// });

$('#botonFb').click(function () {
    $.ajax({
        url: "http://www.mocky.io/v2/5bd84ae83100002414474d3c",
    }).done(function (amigosFromServer) {
        console.log(amigosFromServer);
        //inyectar amigos
        generarHtml ('#amigosFb',amigosFromServer);
        asociateClick ('#amigosFb');
    })
});

$('#botonSp').click(function () {
    $.ajax({
        url: "http://www.mocky.io/v2/5bd84ae83100002414474d3c",
    }).done(function (amigosFromServer) {
        console.log(amigosFromServer);
        //inyectar amigos
        generarHtml ('#amigosSp',amigosFromServer);
        asociateClick ('#amigosSp')
    })
});

function generarHtml(paramElemId, paramAmigos) {
    $(paramElemId).html(function () {
        let htmlAmigos = '';
        paramAmigos.forEach(unAmigo => {
            htmlAmigos += `<li>${unAmigo.name} ${unAmigo.email}</li>
                    <button class='saluda' data-value=${unAmigo.name}>${'Saludar'}</button>`
        })
        return htmlAmigos;
    })
}

function asociateClick (paramElemId) {
    $(paramElemId+' .saluda').click(function () {
        alert('¡Hola, '+$(this).attr('data-value')+'!');
    })
}
