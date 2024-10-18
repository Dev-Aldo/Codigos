let validEmail = "user@cbtis258.edu.mx"
let validPass = "admin1234";

const login = (event) =>{
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email === validEmail && password === validPass){
        mensaje.textContent = "inicio de sesion exitoso";
        mensaje.style.color = "green";

        setTimeout(() => {
            window.location.href = "Primer registro normal.html";
        }, 1000 );
    }
    else{
        mensaje.textContent = "Correo o contraseña incorrecta";
        mensaje.style.color = "red";
    }
}