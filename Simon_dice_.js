const tColores = {
    ROJO:    0,
    VERDE:   1,
    AZUL:    2,
    DORADO:  3,
    BLANCO:  4,
    MARRON:  5,
    NARANJA: 6,
};

const tModo = {
    FACIL:   1,
    DIFICIL: 2,
};

const MAX_COLORES_SEQ    = 15;
const MAX_COLORES_FACIL  = 4;
const MAX_COLORES_DIFICIL = 7;

function charToColor(color) {
    switch (color.toLowerCase()) {
        case "r": return tColores.ROJO;
        case "v": return tColores.VERDE;
        case "a": return tColores.AZUL;
        case "d": return tColores.DORADO;
        case "b": return tColores.BLANCO;
        case "m": return tColores.MARRON;
        case "n": return tColores.NARANJA;
        case "x": return "AYUDA";
        default:  return null;
    }
}

function intToColor(numero) {
    switch (numero) {
        case 0: return tColores.ROJO;
        case 1: return tColores.VERDE;
        case 2: return tColores.AZUL;
        case 3: return tColores.DORADO;
        case 4: return tColores.BLANCO;
        case 5: return tColores.MARRON;
        case 6: return tColores.NARANJA;
        default: return null;
    }
}

function mostrarColor(color) {
    switch (color) {
        case tColores.ROJO:    return "Rojo";
        case tColores.VERDE:   return "Verde";
        case tColores.AZUL:    return "Azul";
        case tColores.DORADO:  return "Dorado";
        case tColores.BLANCO:  return "Blanco";
        case tColores.MARRON:  return "Marrón";
        case tColores.NARANJA: return "Naranja";
    }
}



function generarSecuencia(modo) {
    let numColores;
    if (modo === tModo.DIFICIL) {
        numColores = MAX_COLORES_DIFICIL;
    } else {
        numColores = MAX_COLORES_FACIL;
    }

    const secuenciaColores = [];
    for (let i = 0; i < MAX_COLORES_SEQ; i++) {
        const aleatorio = Math.floor(Math.random() * numColores);
        secuenciaColores.push(intToColor(aleatorio));
    }
    return secuenciaColores;
}

function utilizarAyuda(secuenciaColores, indice, numAyudas) {
    if (numAyudas > 0) {
        numAyudas--;
        console.log(`El siguiente color es el ${mostrarColor(secuenciaColores[indice])}. Te quedan ${numAyudas} ayudas!`);
        return { usada: true, numAyudas };
    } else {
        console.log("No dispones de más ayudas.");
        return { usada: false, numAyudas };
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
const readline = require("readline");

function pregunta(rl, texto) {
    return new Promise((resolve) => {
        rl.question(texto, resolve);
    });
}

async function main() {
    process.stdin.resume();
    const rl = readline.createInterface({
        input:  process.stdin,
        output: process.stdout,
    });

    console.log("¡Bienvenido a Simon dice!");
    const nombre = await pregunta(rl, "¿Cuál es tu nombre? ");
    console.log(`Hola ${nombre}, pulsa una tecla para empezar a jugar.`);
    await pregunta(rl, "");
    await comenzarJuego(nombre, rl);

    rl.close();
}

main().catch(console.error);