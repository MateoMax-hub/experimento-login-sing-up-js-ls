let nombre
let contra

function showlog() { 
    if (document.getElementById('formlog').style.display == 'flex') {
        document.getElementById('formlog').style.display = 'none'
    }
    else {
        document.getElementById('formlog').style.display = 'flex'
    }
}

function sub(event) {
    event.preventDefault()
    nombre = document.getElementsByName("nombre")[0].value
    contra = document.getElementsByName("contra")[0].value

    if (nombre == 'max' && contra == '123') {
        document.getElementById('formlog').style.display = 'none';
        document.getElementById('btnperfil').style.display = 'block';
        console.log ("regato")
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
    document.getElementById('btnfunka').style.display = 'block'

}
