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



// BOTON SIGN UP
// function subSignUp(event) {
//     event.preventDefault()
    





//     if (localStorage.getItem("nombre1") === "" || localStorage.getItem("nombre1") === null ) {
//         let nombreSignUp = document.getElementsByName("nombreSignUp")[0].value
//         localStorage.setItem("nombre1", nombreSignUp)
//     } else {
//         if (localStorage.getItem("nombre2") === "" || localStorage.getItem("nombre2") === null) {
//             let nombreSignUp = document.getElementsByName("nombreSignUp")[0].value
//             localStorage.setItem("nombre2", nombreSignUp)
//         } else {
//             if (localStorage.getItem("nombre3") === "" || localStorage.getItem("nombre3") === null) {
//                 let nombreSignUp = document.getElementsByName("nombreSignUp")[0].value
//                 localStorage.setItem("nombre3", nombreSignUp)
//             } else {
//                 if (localStorage.getItem("nombre4") === "" || localStorage.getItem("nombre4") === null) {
//                     let nombreSignUp = document.getElementsByName("nombreSignUp")[0].value
//                     localStorage.setItem("nombre4", nombreSignUp)
//                 } else {
//                     if (localStorage.getItem("nombre5") === "" || localStorage.getItem("nombre5") === null) {
//                         let nombreSignUp = document.getElementsByName("nombreSignUp")[0].value
//                         localStorage.setItem("nombre5", nombreSignUp)
//                     } else {
//                         alert ("se agotaron el numero de cuentas posibles :C")
//                     }
//                 }
//             }
//         }
//     }

//     if (localStorage.getItem("contraseña1") === "" || localStorage.getItem("contraseña1") === null ) {
//         let contraSignUp = document.getElementsByName("contraSignUp")[0].value
//         localStorage.setItem("contraseña1", contraSignUp)
//     } else {
//         if (localStorage.getItem("contraseña2") === "" || localStorage.getItem("contraseña2") === null) {
//             let contraSignUp = document.getElementsByName("contraSignUp")[0].value
//             localStorage.setItem("contraseña2", contraSignUp)
//         } else {
//             if (localStorage.getItem("contraseña3") === "" || localStorage.getItem("contraseña3") === null) {
//                 let contraSignUp = document.getElementsByName("contraSignUp")[0].value
//                 localStorage.setItem("contraseña3", contraSignUp)
//             } else {
//                 if (localStorage.getItem("contraseña4") === "" || localStorage.getItem("contraseña4") === null) {
//                     let contraSignUp = document.getElementsByName("contraSignUp")[0].value
//                     localStorage.setItem("contraseña4", contraSignUp)
//                 } else {
//                     if (localStorage.getItem("contraseña5") === "" || localStorage.getItem("contraseña5") === null) {
//                         let contraSignUp = document.getElementsByName("contraSignUp")[0].value
//                         localStorage.setItem("contraseña5", contraSignUp)
//                     } else {
//                         alert ("se agotaron el numero de cuentas posibles :C")
//                     }
//                 }
//             }
//         }
//     }
// }



// BOTON DE LOG IN 
// function subLogIn(event) {
//     event.preventDefault()
//     nombre = document.getElementsByName("nombre")[0].value
//     contra = document.getElementsByName("contra")[0].value

//     userNameInStorage = localStorage.getItem("nombre")
//     userPasswordInStorage = localStorage.getItem("contraseña")

//     if ((localStorage.getItem("nombre1") )) {
//         document.getElementById('formLogIn').style.display = 'none';
//         document.getElementById('btnperfil').style.display = 'block';
//         console.log ("regato")
//         document.getElementById('btnSignUp').style.display = 'none'
//         document.getElementById('btnLogIn').style.display ='none'
//     } else {
//         alert('contraseña o nombre incorrecto safa de aca')
//     }
// }

// MUESTRA BARRA DE PERFIL 
// function showprofile() {
//     if (document.getElementById('profile').style.display == 'flex') {
//         document.getElementById('profile').style.display = 'none'
//     }
//     else {
//         document.getElementById('profile').style.display = 'flex'
//     }
// }

// BOTON PARA CERRAR SESION 
// function endLogIn() {
//     document.getElementById('profile').style.display = 'none'
//     document.getElementById('btnperfil').style.display = 'none'
//     document.getElementById('btnSignUp').style.display = 'block'
//     document.getElementById('btnLogIn').style.display = 'block'

// }
