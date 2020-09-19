let nombre
let contra

function sub(event) {
    event.preventDefault()
    nombre = document.getElementsByName("nombre")[0].value
    contra = document.getElementsByName("contra")[0].value

    if (nombre == 'max' && contra == '123') {
        alert('hola Max')
    } else {
        alert('contraseña o nombre incorrecto safa de aca')
    }
}


let logi = false

function login(){
    document.getElementById('btnprueba').style.display = 'none';
    document.getElementById('btnprueba2').style.display = 'block';
    logi = "true"
    let btnprofile = document.getElementById ('btnperfil')

    if (logi == "true") {
        console.log ("true")
        btnprofile.style.display = 'block'
    } else {
        document.getElementById('btnperfil').style.display = 'none'
        console.log ("false")
    
    }
}