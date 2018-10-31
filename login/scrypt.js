document.getElementById('accederbtn').onclick = (function (evnt) {
console.log (evnt);
event.preventDefault();

    let formValid = document.getElementById('loginForm').checkValidity();
    if(formValid){
        //Enviar
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd9732f2f0000790006d124", //true
            // url: "http://www.mocky.io/v2/5bd977d72f00004c0006d159", //false
            data: { name: document.getElementById('username').value, 
            password: document.getElementById('password').value}
        }).done(function(data){
            console.log(data)
            if(data.result) {
                window.location.href='dashboard.html';
            }else{
                document.getElementById('mensaje').classList.remove('ocultar');
            }
        })

    }else{
        //mostrar mensaje y no enviar
        

        // document.getElementById('mensaje').innerHTML = 'Datos incorrectos'

        // document.querySelectorAll('.error').forEach (elem =>{
        //     elem.innerHTML = '';

        document.querySelectorAll('.error').forEach (elem =>{
            elem.classList.add('esconder');
        })

        // if(!document.getElementById('username').checkValidity() ){
        //     document.getElementById('errorUserName').innerHTML = 'Completa el nombre con el formato correcto';
        // }

        // if(!document.getElementById('password').checkValidity() ){
        //     document.getElementById('errorPassword').innerHTML = 'Completa el password con el formato correcto';
        // }

        if (!document.getElementById('username').checkValidity() ){
            document.getElementById('errorUserName').classList.remove('esconder');
        }
        if (!document.getElementById('password').checkValidity() ){
            document.getElementById('errorPassword').classList.remove('esconder');
        }
    
   }
})