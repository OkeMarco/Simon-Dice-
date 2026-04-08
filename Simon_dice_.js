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