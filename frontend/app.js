const url = "http://localhost:3000/users";
let editando = null;

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const boton = document.getElementById("boton");
const cancelar = document.getElementById("cancelar");
const tabla = document.getElementById("cuerpoTabla");
const titulo = document.getElementById("titulo");

window.addEventListener("load", cargarUsuarios);
form.addEventListener("submit", agregarUsuario);
cancelar.addEventListener("click", cancelarEdicion);

async function cargarUsuarios() {
    try {
        const res = await fetch(url);
        const usuarios = await res.json();
        
        tabla.innerHTML = "";
        usuarios.forEach(usuario => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${usuario.id}</td>
                <td>${usuario.name}</td>
                <td>${usuario.email}</td>
                <td>
                    <button onclick="editar(${usuario.id}, '${usuario.name}', '${usuario.email}')">Editar</button>
                    <button onclick="eliminar(${usuario.id})">Eliminar</button>
                </td>
            `;
            tabla.appendChild(fila);
        });
    } catch (error) {
        console.log("Error:", error);
    }
}

async function agregarUsuario(e) {
    e.preventDefault();
    
    const datos = {
        name: nombre.value,
        email: email.value
    };

    try {
        if (editando) {
            const res = await fetch(url + "/" + editando, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(datos)
            });
            alert("Usuario actualizado");
            cancelarEdicion();
        } else {
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(datos)
            });
            alert("Usuario creado");
        }
        
        form.reset();
        cargarUsuarios();
    } catch (error) {
        alert("Error: " + error);
    }
}

function editar(id, nom, em) {
    editando = id;
    nombre.value = nom;
    email.value = em;
    boton.textContent = "Actualizar";
    titulo.textContent = "Editar Usuario";
    cancelar.style.display = "inline";
}

function cancelarEdicion() {
    editando = null;
    form.reset();
    boton.textContent = "Agregar";
    titulo.textContent = "Agregar Usuario";
    cancelar.style.display = "none";
}

async function eliminar(id) {
    if (confirm("¿Estás seguro?")) {
        try {
            await fetch(url + "/" + id, { method: "DELETE" });
            alert("Usuario eliminado");
            cargarUsuarios();
        } catch (error) {
            alert("Error: " + error);
        }
    }
}
