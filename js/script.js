// LOGIN

function login() {
  let inputUsername = document.getElementById("usuario").value.toLowerCase();
  let inputPassword = document.getElementById("password").value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  let usuarioEncontrado = usuarios.find(
    (usuario) =>
      usuario.username === inputUsername &&
      usuario.password === inputPassword
  );

  if (usuarioEncontrado) {
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));
    document.getElementById("modal-login-exito").style.display = "block";
  } else {
    document.getElementById("modal-error").style.display = "block";
    document.getElementById("form-login").reset();
  }
}

// iniciar sesión

document
  .getElementById("form-login")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    login();
  });

//  modal de error

document
  .getElementById("btn-cerrar-modal")
  .addEventListener("click", function () {
    document.getElementById("modal-error").style.display = "none";
  });

//  modal de login exitoso

document
  .getElementById("btn-cerrar-login-exito")
  .addEventListener("click", function () {
    document.getElementById("modal-login-exito").style.display = "none";
  });

// Mostrar contraseña

document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const input = document.getElementById("password");
    const tipo = input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", tipo);
  });

// REGISTRO

function registrarUsuario(e) {
    e.preventDefault();

    const password = document.getElementById("password-registro").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    const nuevoUsuario = {
        nombre: document.getElementById("nombre").value,
        telefono: document.getElementById("telefono").value,
        edad: parseInt(document.getElementById("edad").value),
        sexo: document.getElementById("sexo").value,
        peso: parseFloat(document.getElementById("peso").value),
        altura: parseFloat(document.getElementById("altura").value),
        tipoEntrenamiento: document.getElementById("tipo-entrenamiento").value,
        dias: parseInt(document.getElementById("dias").value),
        nivel: document.getElementById("nivel").value,
        meta: document.getElementById("meta").value,
        observacion: document.getElementById("observacion").value,
        username: document.getElementById("nombre").value.toLowerCase(),
        password: password
    };

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    document.getElementById("form-registro").reset();
    document.getElementById("modal-exito").style.display = "block";
}

// Mostrar contraseña de registro

document.getElementById("togglePasswordRegistro").addEventListener("click", function () {
    const passwordInput = document.getElementById("password-registro");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

document.getElementById("toggleConfirmPassword").addEventListener("click", function () {
    const confirmInput = document.getElementById("confirm-password");
    confirmInput.type = confirmInput.type === "password" ? "text" : "password";
});


// modal de registro

document
  .getElementById("btn-cerrar-exito")
  .addEventListener("click", function () {
    document.getElementById("modal-exito").style.display = "none";
    document.getElementById("form-registro").classList.add("oculto");
    document.getElementById("form-login").classList.remove("oculto");
  });

// Abrir formulario

document
  .getElementById("btn-abrir-registro")
  .addEventListener("click", function () {
    document.getElementById("form-registro").classList.remove("oculto");
    document.getElementById("form-login").classList.add("oculto");
  });

// envio del formulario 

document
  .getElementById("form-registro")
  .addEventListener("submit", registrarUsuario);
