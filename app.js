/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
 Aquí deberás desarrollar la lógica para resolver el problema.*/
let amigos = [];


/*function asignarElementoTexto(elemento,texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}*/
function agregarAmigo() {
    // captura el valor de entrada
    let nombre = document.getElementById("amigo").value;
    // validar la entrada
    if (nombre === "" || nombre === " "){
        alert("Por favor, inserte un nombre.");
    }else{
        // almaceno los nombres
        amigos.push(nombre);
        //agrego a la lista li
        actualizarListaAmigos(amigos);
        // limpiar
        limpiarInput();
    }
}
//asignarElementoTexto("amigo");

function limpiarInput() {
    // El query selector por Id
    document.querySelector("#amigo").value = "";
}
function actualizarListaAmigos(amigos) {
    let elementoHTML = document.getElementById("listaAmigos");
    //para asegurarse de que no haya duplicados al actualizar.
    elementoHTML.innerHTML ="";
    //Iterar sobre el arreglo
    for (const amigo in amigos) {
        elementoHTML.innerHTML += `<li>${amigos[amigo]}</li>`;
    }
}
function sortearAmigo() {
    //Validamos que haya amigos disponibles
    if(amigos.length ===0 ){
        alert("Debe agregar amigos para sortear");
        
    }else{
        //sorteamos
        let indice = generarIndiceAleatorio();
        let elementoHTML = document.getElementById("resultado");
        elementoHTML.innerHTML ="";
        elementoHTML.innerHTML += `<li>${amigos[indice]}</li>`;
    }
}
function generarIndiceAleatorio() {
    // la lista se genera de 0 a length x eso saco el +1
    return Math.floor(Math.random()* amigos.length);
}