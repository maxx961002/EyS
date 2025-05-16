// LOGIN //
function login() {
    let inputUsername = document.getElementById("usuario").value;
    let inputPassword = document.getElementById("password").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let usuarioEncontrado = usuarios.find(
        (usuario) => usuario.username === inputUsername && usuario.password === inputPassword
    );

    if (usuarioEncontrado) {
        alert("Inicio de sesión exitoso");
    } else {
        document.getElementById("modal-error").style.display = "block";
        document.getElementById("form-login").reset();
    }
}

document.getElementById("form-login").addEventListener("submit", function (e) {
    e.preventDefault();
    login();
});

document.getElementById("btn-cerrar-modal").addEventListener("click", function () {
  document.getElementById("modal-error").style.display = "none";
});
