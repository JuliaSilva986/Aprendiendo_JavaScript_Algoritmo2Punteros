let cantidad = Number(prompt("¿Cuántos invitados hay?"));
let invitados = [];

for (let i = 0; i < cantidad; i++) {
    let nombre = prompt("Nombre del invitado:");
    invitados.push(nombre);
}

// Ordenar alfabéticamente
invitados.sort((a, b) => a.localeCompare(b, "es"));

function buscarPareja(lista) {
    let izquierda = 0;
    let derecha = 1;

    while (derecha < lista.length) {
        let letra1 = lista[izquierda][0].toLowerCase();
        let letra2 = lista[derecha][0].toLowerCase();

        if (letra1 === letra2) {
            return [lista[izquierda], lista[derecha]];
        }

        izquierda++;
        derecha++;
    }

    return null;
}

console.log("Lista de invitados:", invitados);

let pareja = buscarPareja(invitados);

if (pareja !== null) {
    console.log(`Pueden sentarse juntos: ${pareja[0]} y ${pareja[1]}`);
} else {
    console.log("No se encontró ninguna pareja.");
}