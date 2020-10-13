

// REGISTRACION 
function subSignUp(event) {
    event.preventDefault()

    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }


    let nombreSignUp = document.getElementsByName('nombreSignUp')[0].value
    let contraSignUp = document.getElementsByName("contraSignUp")[0].value



    let key = text
    localStorage.setItem(key,[nombreSignUp,contraSignUp])
    document.getElementById('formSignUp').style.display = 'none';

    
}


// LOG IN 
function subLogIn(event) {
    event.preventDefault()


    let nombreLogIn = document.getElementsByName('nombreLogIn')[0].value
    let contraLogIn = document.getElementsByName('contraLogIn')[0].value

    let DataIn = [nombreLogIn,contraLogIn]


    for (let i = 0; i < localStorage.length; i++) {
        if (DataIn == localStorage.getItem(localStorage.key(i))){
            document.getElementById("wa").style.display  = "none"
            document.getElementById('formLogIn').style.display = 'none';
            document.getElementById('btnperfil').style.display = 'block';
            document.getElementById('btnSignUp').style.display = 'none'
            document.getElementById('btnLogIn').style.display ='none'
        } else {
            document.getElementById("wa").style.display  = "flex"
        } 
    } 
}







// MUESTRA BARRA DE PERFIL 
function showprofile() {
    if (document.getElementById('profile').style.display == 'flex') {
        document.getElementById('profile').style.display = 'none'
    }
    else {
        document.getElementById('profile').style.display = 'flex'
        document.getElementsByName("contraLogIn")
    }
}

// BOTON PARA CERRAR SESION 
function endLogIn() {
    document.getElementById('profile').style.display = 'none'
    document.getElementById('btnperfil').style.display = 'none'
    document.getElementById('btnSignUp').style.display = 'block'
    document.getElementById('btnLogIn').style.display = 'block'
    document.getElementById("wa").style.display  = "none"
}

// Boton para q aparezca el form del log 
function showlog() { 
    if (document.getElementById('formLogIn').style.display == 'flex') {
        document.getElementById('formLogIn').style.display = 'none'
    }
    else {
        document.getElementById('formSignUp').style.display = 'none'
        document.getElementById('formLogIn').style.display = 'flex'
    }
}

// Boton para q aparezca el form del Sing
function showregister() { 
    if (document.getElementById('formSignUp').style.display == 'flex') {
        document.getElementById('formSignUp').style.display = 'none'
    }
    else {
        document.getElementById('formLogIn').style.display = 'none'
        document.getElementById('formSignUp').style.display = 'flex'
    }
}