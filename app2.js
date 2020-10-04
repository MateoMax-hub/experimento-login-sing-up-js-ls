let nombre
let contra


function subRegister(event) {
    event.preventDefault()
    

    
    if (localStorage.getItem("nombre1") === "" || localStorage.getItem("nombre1") === null ) {
        let nombreSingIn = document.getElementsByName("nombreSingIn")[0].value
        localStorage.setItem("nombre1", nombreSingIn)
    } else {
        if (localStorage.getItem("nombre2") === "" || localStorage.getItem("nombre2") === null) {
            let nombreSingIn = document.getElementsByName("nombreSingIn")[0].value
            localStorage.setItem("nombre2", nombreSingIn)
        } else {
            if (localStorage.getItem("nombre3") === "" || localStorage.getItem("nombre3") === null) {
                let nombreSingIn = document.getElementsByName("nombreSingIn")[0].value
                localStorage.setItem("nombre3", nombreSingIn)
            } else {
                if (localStorage.getItem("nombre4") === "" || localStorage.getItem("nombre4") === null) {
                    let nombreSingIn = document.getElementsByName("nombreSingIn")[0].value
                    localStorage.setItem("nombre4", nombreSingIn)
                } else {
                    if (localStorage.getItem("nombre5") === "" || localStorage.getItem("nombre5") === null) {
                        let nombreSingIn = document.getElementsByName("nombreSingIn")[0].value
                        localStorage.setItem("nombre5", nombreSingIn)
                    } else {
                        alert ("se agotaron el numero de cuentas posibles :C")
                    }
                }
            }
        }
    }

    if (localStorage.getItem("contraseña1") === "" || localStorage.getItem("contraseña1") === null ) {
        let contraSingIn = document.getElementsByName("contraSingIn")[0].value
        localStorage.setItem("contraseña1", contraSingIn)
    } else {
        if (localStorage.getItem("contraseña2") === "" || localStorage.getItem("contraseña2") === null) {
            let contraSingIn = document.getElementsByName("contraSingIn")[0].value
            localStorage.setItem("contraseña2", contraSingIn)
        } else {
            if (localStorage.getItem("contraseña3") === "" || localStorage.getItem("contraseña3") === null) {
                let contraSingIn = document.getElementsByName("contraSingIn")[0].value
                localStorage.setItem("contraseña3", contraSingIn)
            } else {
                if (localStorage.getItem("contraseña4") === "" || localStorage.getItem("contraseña4") === null) {
                    let contraSingIn = document.getElementsByName("contraSingIn")[0].value
                    localStorage.setItem("contraseña4", contraSingIn)
                } else {
                    if (localStorage.getItem("contraseña5") === "" || localStorage.getItem("contraseña5") === null) {
                        let contraSingIn = document.getElementsByName("contraSingIn")[0].value
                        localStorage.setItem("contraseña5", contraSingIn)
                    } else {
                        alert ("se agotaron el numero de cuentas posibles :C")
                    }
                }
            }
        }
    }
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

    if ((localStorage.getItem("nombre1") )) {
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
