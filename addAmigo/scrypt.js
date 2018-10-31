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


document.getElementById('addbtn').onclick = function(evnt) {
    event.preventDefault();

    let formValid = document.getElementById('addamigo').checkValidity();
    
    if(formValid){
        //enviar
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd9732f2f0000790006d124", //true
            // url: "http://www.mocky.io/v2/5bd977d72f00004c0006d159", //false
            data: { name: document.getElementById('nombreamigo').value, 
            email: document.getElementById('emailamigo').value},
        }).done(function(data,datosamigo){ 
            console.log(data);
            if (data.result) {
                let datosamigo = [{ name: document.getElementById('nombreamigo').value, 
                email: document.getElementById('emailamigo').value}];
                console.log(datosamigo);
                generarHtml('#amigosFb', datosamigo);
                asociateClick ('#amigosFb');
            }else{
                document.getElementById('mensaje').classList.remove('esconder');
            }
        })
    }else{
        document.querySelectorAll('.error').forEach (elem =>{
            elem.classList.add('esconder');
        })
        if (!document.getElementById('username').checkValidity() ){
            document.getElementById('errorUserName').classList.remove('esconder');
        }
        if (!document.getElementById('password').checkValidity() ){
            document.getElementById('errorPassword').classList.remove('esconder');
        }
    }

}

    



