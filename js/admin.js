// admin.js

// Traemos los alumnos del localStorage
let alumnos = JSON.parse(localStorage.getItem("usuarios")) || [];

// Elementos
const tablaBody = document.querySelector("#tabla-alumnos tbody");
const buscador = document.getElementById("buscar-alumno");

// Función para renderizar alumnos en la tabla
function mostrarAlumnos(lista) {
    // Limpiamos la tabla primero
    tablaBody.innerHTML = "";

    // Recorremos los alumnos
    lista.forEach((alumno, index) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${alumno.nombre}</td>
            <td>${alumno.telefono}</td>
            <td>${alumno.edad}</td>
            <td>${alumno.tipoEntrenamiento}</td>
            <td>${alumno.nivel}</td>
            <td>
                <button onclick="verFicha(${index})">Ver Ficha</button>
            </td>
        `;

        tablaBody.appendChild(fila);
    });
}

// Función para buscar alumnos
buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();
    const filtrados = alumnos.filter(alumno => 
        alumno.nombre.toLowerCase().includes(texto)
    );
    mostrarAlumnos(filtrados);
});

// Función para ver ficha (de momento solo alerta)
function verFicha(index) {
    const alumno = alumnos[index];
    alert(`Nombre: ${alumno.nombre}\nEdad: ${alumno.edad}\nMeta: ${alumno.meta}`);
}

// Al cargar la página mostramos todos
mostrarAlumnos(alumnos);

const inputBuscar = document.getElementById("buscar-alumno");

// Función para renderizar la tabla
function renderizarTabla(filtrados = alumnos) {
    tablaBody.innerHTML = "";

    filtrados.forEach((alumno, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${alumno.nombre}</td>
            <td>${alumno.telefono}</td>
            <td>${alumno.edad}</td>
            <td>${alumno.tipoEntrenamiento}</td>
            <td>${alumno.nivel}</td>
            <td>
                <button class="btn-ver">Ver Ficha</button>
                <button class="btn-editar">Editar</button>
                <button class="btn-eliminar">Eliminar</button>
            </td>
        `;
        tablaBody.appendChild(fila);
    });
}

// Evento para buscar alumnos
inputBuscar.addEventListener("input", () => {
    const termino = inputBuscar.value.toLowerCase();
    const filtrados = alumnos.filter(alumno =>
        alumno.nombre.toLowerCase().includes(termino)
    );
    renderizarTabla(filtrados);
});

// Cargar la tabla inicialmente
renderizarTabla();
