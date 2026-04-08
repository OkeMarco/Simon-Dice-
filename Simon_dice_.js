const tColores = {
    ROJO:   0,
    VERDE:  1,
    AZUL:   2,
    DORADO: 3,
}
const MAX_COLORES_SEQ = 12;

function charToColor(color) {
    switch (color.toLowerCase()) {
        case "r": return tColores.ROJO;
        case "v": return tColores.VERDE;
        case "a": return tColores.AZUL;
        case "d": return tColores.DORADO;
        default:  return null;
    }
}   

function intToColor(numero) {
    switch (numero) {
        case 0: return tColores.ROJO;
        case 1: return tColores.VERDE;
        case 2: return tColores.AZUL;
        case 3: return tColores.DORADO;
        default: return null;
    }
}

function generarSecuencia(numColores) {
    const secuenciaColores = [];
    for (let i = 0; i < MAX_COLORES_SEQ; i++) {
        const aleatorio = Math.floor(Math.random() * (numColores + 1));
        secuenciaColores.push(intToColor(aleatorio));
    }
    return secuenciaColores;
}

function mostrarColor(color) {
    switch (color) {
        case tColores.ROJO:   return "Rojo";
        case tColores.VERDE:  return "Verde";
        case tColores.AZUL:   return "Azul";
        case tColores.DORADO: return "Dorado";
    }
}

function comprobarColor(secuenciaColores, indice, color) {
    return secuenciaColores[indice] === color;  
}
function mostrarSecuencia(secuenciaColores, numero) {
    let secuenciaTexto = "";
    for (let i = 0; i < numero; i++) {
        secuenciaTexto += mostrarColor(secuenciaColores[i]);
        if (i < numero - 1) secuenciaTexto += " - ";
    }
    console.log(`Secuencia numero ${numero - 2}: ${secuenciaTexto}`);
    console.log("Memoriza la secuencia y pulsa Enter para continuar...");
}

async function comenzarJuego(nombre, rl) {
    const numColores = Object.keys(tColores).length - 1;
    const secuencia = generarSecuencia(numColores);
    let longitudActual = 3;
    let juegoTerminado = false;

    while (!juegoTerminado) {
        mostrarSecuencia(secuencia, longitudActual);
        await pregunta(rl, "");
        console.clear();

        console.log(`${nombre}, introduce la secuencia de ${longitudActual} colores:`);
        console.log("(R = Rojo, V = Verde, A = Azul, D = Dorado)");

        let indice = 0;

        while (!juegoTerminado && indice < longitudActual) {
            let colorUsuario = null;

            while (colorUsuario === null) {
                const entrada = await pregunta(rl, `Color ${indice + 1}: `);
                colorUsuario = charToColor(entrada.trim());
            }

            if (!comprobarColor(secuencia, indice, colorUsuario)) {
                juegoTerminado = true;
                console.log("Has perdido.");
            }
            indice++;
        }

        if (!juegoTerminado) {
            if (longitudActual === MAX_COLORES_SEQ) {
                console.log("¡Enhorabuena, has ganado!");
                juegoTerminado = true;
            } else {
                console.log("Enhorabuena, has pasado de ronda.");
                longitudActual++;
            }
        }
    }
}