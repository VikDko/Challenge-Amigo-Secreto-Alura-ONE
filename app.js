// Array para almacenar nombres de los amigos ingresados
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo"); // Obtener texto ingresado por el usuario
  const nombre = input.value.trim(); // Obtener valor y eliminar espacios en blanco

  // Validar la entrada, asegurarse que el campo no esté vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre."); // Mostrar alerta si está vacío
    return; // Detener la función
  }

  // Actualizar y agregar el nombre al array
  amigos.push(nombre);

  // Limpiar el campo de entrada, reestablecer el valor a vacio
  input.value = "";

  // Actualizar la lista de amigos en la página, llamar a la funcion para actualizar la lista
  actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la página
function actualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos"); // Seleccionar lista donde se mostrarán los amigos
  listaAmigos.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos, se asegura que no haya duplicados

  // Recorrer el array de amigos y agregar cada nombre como elemento <li> a la lista
  amigos.forEach((amigo) => {
    const li = document.createElement("li"); // Crear un elemento <li>
    li.textContent = amigo; // Asignar el nombre del amigo
    li.classList.add("name-item"); // Agregar clase name-item al <li> para aplicar estilos CSS personalizados
    listaAmigos.appendChild(li); // Agregar el <li> a la lista
  });
}

// Reaccionar al usar la tecla Enter para agregar amigos
const input = document.getElementById("amigo"); // Seleccionar el campo de texto
input.addEventListener("keypress", function (event){
    if (event.key === "Enter") {
        agregarAmigo(); // Llamar a la función agregarAmigo al verificar que la tecla presionada es Enter
    }
});

// Función para sortear los amigos almacenados en el array
// Math.random() devuelve un número aleatorio entre 0 y 1 y Math.floor() redondea el número hacia abajo al entero más cercano
function sortearAmigo() {
  // Validar que haya amigos disponibles para sortear
  if (amigos.length === 0) {
    alert("La lista está vacía. Por favor, ingresa amigos para realizar el sorteo."); // Mostrar alerta si el array está vacío
    return; // Detener la función
  }

  // Generar un índice aleatorio para seleccionar un amigo de la lista 
  const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
  const amigoSecreto = amigos[indiceAleatorio]; // Obtener el nombre sorteado

  // Mostrar el resultado en la página
  const resultado = document.getElementById("resultado"); // Actualizar el contenido del elemento de resultado
  resultado.innerHTML = `<li class="result-item">¡El amigo secreto es: <strong>${amigoSecreto}</strong>!</li>`; // Mostrar el amigo secreto sorteado
 
}

// Limpiar lista de amigos
function limpiarLista() {
  amigos = []; // Vaciar el array de amigos
  actualizarListaAmigos(); // Actualizar la lista en la página
  const resultado = document.getElementById("resultado"); // Obtener el contenedor de resultados
  resultado.innerHTML = ""; // Limpiar el resultado del sorteo
}

