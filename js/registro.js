// /js/registro.js
import { auth, db } from './firebase-config.js';
import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import {
  collection,
  doc,
  setDoc,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

const formRegistro = document.getElementById('form-registro');
const verificarBtn = document.getElementById('btn-verificar-username');
const usernameInput = document.getElementById('username');
const nombreInput = document.getElementById('nombre');
const passwordInput = document.getElementById('password-registro');
const confirmPasswordInput = document.getElementById('confirm-password');
const mensajeDisponibilidad = document.getElementById('username-disponibilidad');

async function verificarUsername() {
  const username = usernameInput.value.trim().toLowerCase();
  if (!username.startsWith('@')) {
    mensajeDisponibilidad.textContent = "El username debe comenzar con @";
    mensajeDisponibilidad.style.color = "red";
    return;
  }
  const usersRef = collection(db, "usuarios");
  const q = query(usersRef, where("username", "==", username));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) {
    mensajeDisponibilidad.textContent = "¡Username disponible!";
    mensajeDisponibilidad.style.color = "green";
  } else {
    mensajeDisponibilidad.textContent = "Username no disponible";
    mensajeDisponibilidad.style.color = "red";
  }
}

verificarBtn.addEventListener('click', verificarUsername);

formRegistro.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const nombre = nombreInput.value.trim();
  const username = usernameInput.value.trim().toLowerCase();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden");
    return;
  }

  try {
    const emailFalso = username.replace('@', '') + "@gimnasioeys.com"; 
    const userCredential = await createUserWithEmailAndPassword(auth, emailFalso, password);
    const user = userCredential.user;

    await setDoc(doc(db, "usuarios", user.uid), {
      nombre: nombre,
      username: username,
      estado: "pendiente",
      uid: user.uid,
      creadoEn: new Date()
    });

    alert("¡Cuenta creada exitosamente!");

  } catch (error) {
    console.error(error);
    alert("Error al crear usuario: " + error.message);
  }
});
