// /js/login.js
import { auth } from './firebase-config.js';
import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

const formLogin = document.getElementById('form-login');
const usuarioInput = document.getElementById('usuario');
const passwordInput = document.getElementById('password');

formLogin.addEventListener('submit', async (e) => {
  e.preventDefault();

  const usernameOrDni = usuarioInput.value.trim();
  const password = passwordInput.value;

  let emailFalso;

  if (usernameOrDni.startsWith('@')) {
    emailFalso = usernameOrDni.replace('@', '') + "@gimnasioeys.com";
  } else {
    alert('Por ahora solo login con username tipo @usuario');
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, emailFalso, password);
    const user = userCredential.user;
    
    console.log('Login exitoso', user);
    mostrarModalExito();
  } catch (error) {
    console.error(error);
    mostrarModalError();
  }
});

function mostrarModalExito() {
  const modalExito = document.getElementById('modal-login-exito');
  modalExito.classList.add('activo');
  const btnCerrar = document.getElementById('btn-cerrar-login-exito');
  btnCerrar.addEventListener('click', () => {
    modalExito.classList.remove('activo');
    // Redirigir al dashboard o página principal
    window.location.href = "dashboard.html"; // cambialo a tu dashboard real
  });
}

function mostrarModalError() {
  const modalError = document.getElementById('modal-error');
  modalError.classList.add('activo');
  const btnCerrar = document.getElementById('btn-cerrar-modal');
  btnCerrar.addEventListener('click', () => {
    modalError.classList.remove('activo');
  });
}
