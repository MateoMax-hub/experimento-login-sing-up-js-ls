
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
}



function subLogIn(event) {
    event.preventDefault()

    let nombreLogIn = document.getElementsByName('nombreLogIn')[0].value
    let contraLogIn = document.getElementsByName('contraLogIn')[0].value

    let DataIn = [nombreLogIn,contraLogIn]


    for (let i = 0; i < localStorage.length; i++) {
        if (DataIn == localStorage.getItem(localStorage.key(i))){
            
        } else {

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
    }
}