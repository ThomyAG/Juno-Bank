
const signInBtn = document.getElementById("signInBtn")

signInBtn.addEventListener("click", signIn)


function signIn() {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    
    let storedUsername = localStorage.getItem("userName");
    let storedPassword = localStorage.getItem("password");

    if(userName === storedUsername && password === storedPassword) {
        console.log("Ingrese una clave y contraseña correcta")
    } else {
            console.log("No hago nada")
    }
}