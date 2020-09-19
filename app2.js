let nombre
let contra

function sub(event) {
    event.preventDefault()
    nombre = document.getElementsByName("nombre")[0].value
    contra = document.getElementsByName("contra")[0].value

    if (nombre == 'max' && contra == '123') {
        document.getElementById('formlog').style.display = 'none'
        document.getElementById('btnperfil').style.display = 'block'

    } else {
        alert('contraseña o nombre incorrecto safa de aca')
    }
}


let logi = false

function login(){
    document.getElementById('btnprueba').style.display = 'none';
    document.getElementById('btnprueba2').style.display = 'block';
    logi = "true"
    

    if (logi == "true") {
        console.log ("true")
        document.getElementById('btnperfil').style.display = 'block'
    } else {
        document.getElementById('btnperfil').style.display = 'none'
        console.log ("false")
    
    }
}