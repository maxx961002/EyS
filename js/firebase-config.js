// /js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXZEIvm8z5J7r7klhONt7HGo4z24yr3Gw",
  authDomain: "gimnasioeys.firebaseapp.com",
  projectId: "gimnasioeys",
  storageBucket: "gimnasioeys.firebasestorage.app",
  messagingSenderId: "272322714218",
  appId: "1:272322714218:web:83390b8f6feae2c1938813",
  measurementId: "G-BTW9088277"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
