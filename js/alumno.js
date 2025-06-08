// alumno.js

// Simulamos que al iniciar sesión, guardamos el nombre del usuario logueado
// Después cuando terminemos el login real, esto lo haríamos automático
const usuarioActivo = localStorage.getItem("usuarioActivo");

// Buscamos los datos del alumno en localStorage
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Encontramos al usuario logueado
const alumno = usuarios.find(usuario => usuario.username === usuarioActivo);

// Si encontramos al alumno, mostramos sus datos
if (alumno) {
    document.getElementById("nombre-alumno").textContent = alumno.nombre;
    document.getElementById("telefono").textContent = alumno.telefono;
    document.getElementById("edad").textContent = alumno.edad;
    document.getElementById("sexo").textContent = alumno.sexo;
    document.getElementById("peso").textContent = alumno.peso;
    document.getElementById("altura").textContent = alumno.altura;
    document.getElementById("tipo-entrenamiento").textContent = alumno.tipoEntrenamiento;
    document.getElementById("dias").textContent = alumno.dias;
    document.getElementById("nivel").textContent = alumno.nivel;
    document.getElementById("meta").textContent = alumno.meta;
    document.getElementById("observacion").textContent = alumno.observacion;
} else {
    // Si no hay usuario logueado o no existe, redirigimos al login
    alert("No hay un alumno logueado. Redirigiendo al inicio de sesión...");
    window.location.href = "index.html"; // O la ruta que tengas para login
}
