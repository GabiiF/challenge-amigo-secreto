/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
 Aquí deberás desarrollar la lógica para resolver el problema.*/
let amigos = [];


/*function asignarElementoTexto(elemento,texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}*/
function agregarAmigo() {
    // captura el valor de entrada
    console.log("lista: ", amigos);
    let nombre = document.getElementById("amigo").value;
    // validar la entrada
    if (nombre === "" || nombre === " "){
        alert("Por favor, inserte un nombre.");
    }else{
        // almaceno los nombres
        amigos.push(nombre);
        console.log("lista: ", amigos);
        // limpiar
        limpiarInput();
    }
}
//asignarElementoTexto("amigo");

function limpiarInput() {
    // El query selector por Id
    document.querySelector("#amigo").value = "";
}