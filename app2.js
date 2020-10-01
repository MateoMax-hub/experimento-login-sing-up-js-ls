let nombre
let contra


function subRegister(event) {
    event.preventDefault()
    

    let contraSingIn = document.getElementsByName("contraSingIn")[0].value
    let nombreSingIn = document.getElementsByName("nombreSingIn")[0].value

    let keyN = "nombre"


    // JSON.stringify({ userName: 'nombreSingIn', userPassword: 'contraSingIn'})
    localStorage.setItem( keyN, nombreSingIn)
    localStorage.setItem("contraseña", contraSingIn)

}



function showlog() { 
    if (document.getElementById('formlog').style.display == 'flex') {
        document.getElementById('formlog').style.display = 'none'
    }
    else {
        document.getElementById('formsing').style.display = 'none'
        document.getElementById('formlog').style.display = 'flex'
    }
}

function showregister() { 
    if (document.getElementById('formsing').style.display == 'flex') {
        document.getElementById('formsing').style.display = 'none'
    }
    else {
        document.getElementById('formlog').style.display = 'none'
        document.getElementById('formsing').style.display = 'flex'
    }
}

function sub(event) {
    event.preventDefault()
    nombre = document.getElementsByName("nombre")[0].value
    contra = document.getElementsByName("contra")[0].value

    userNameInStorage = localStorage.getItem("nombre")
    userPasswordInStorage = localStorage.getItem("contraseña")

    if (nombre == userNameInStorage && contra == userPasswordInStorage) {
        document.getElementById('formlog').style.display = 'none';
        document.getElementById('btnperfil').style.display = 'block';
        console.log ("regato")
        document.getElementById('btnregister').style.display = 'none'
        document.getElementById('btnfunka').style.display ='none'
    } else {
        alert('contraseña o nombre incorrecto safa de aca')
    }
}

function showprofile() {
    if (document.getElementById('profile').style.display == 'flex') {
        document.getElementById('profile').style.display = 'none'
    }
    else {
        document.getElementById('profile').style.display = 'flex'
    }
}

function endlog() {
    document.getElementById('profile').style.display = 'none'
    document.getElementById('btnperfil').style.display = 'none'
    document.getElementById('btnregister').style.display = 'block'
    document.getElementById('btnfunka').style.display = 'block'

}
