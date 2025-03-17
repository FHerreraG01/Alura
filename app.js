// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const getElement = (id) => document.getElementById(id);

function agregarAmigo() {
    const input = getElement('amigo');
    const nombre = input.value.trim();

    if (!nombre) return alert("Por favor, inserte un nombre.");

    amigos.push(nombre);
    input.value = '';
    actualizarLista();
}

function actualizarLista() {
    getElement('listaAmigos').innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function sortearAmigo() {
    if (!amigos.length) return alert("No hay amigos en la lista para sortear.");

    getElement('resultado').innerHTML = `<li>El amigo secreto es: ${amigos[Math.floor(Math.random() * amigos.length)]}</li>`;
}
