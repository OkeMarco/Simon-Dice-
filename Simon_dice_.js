const tColores = {
  ROJO:   0,
  VERDE:  1,
  AZUL:   2,
  DORADO: 3,
}
const MAX_COLORES_SEQ= 12
//const secuenciaColores= new Array(MAX_COLORES_SEQ);

function charToColor(color){
  
    switch(color.toLowerCase()){
        case "r":
             return tColores.ROJO
        case "v":
            return tColores.VERDE
        case "a":
            return tColores.AZUL
        case "d":
            return tColores.DORADO 
        default: 
            return null                   
    }
}