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
    function intToColor(numero){
    switch(numero){
        case 0:
             return tColores.ROJO
        case 1:
            return tColores.VERDE
        case 2:
            return tColores.AZUL
        case 3:
            return tColores.DORADO
        default: 
            return null                   
    }
}
function generarSecuencia ( numColores ){
   const secuenciaColores=[]
   for(let i=0; i<MAX_COLORES_SEQ;i++){
    const aleatorio = Math.floor(Math.random() * (numColores + 1));
     const color = intToColor(aleatorio);
    secuenciaColores.push(color)


   }
   return secuenciaColores
}
}
function mostrarColor(color){
    switch(color){
        case rojo: rojo==tColores.ROJO
                return "rojo"
        case verde: verde==tColores.VERDE
                return "verde"
        case azul: azul==tColores.AZUL
                return "azul"
        case dorado: dorado==tColores.DORADO
                return "dorado"                            

    }
   }

function comprobarColor(secuenciaColores,indice,color){
    if(secuenciaColores[indice]==color){
        return true
    }else{
        return false
    }
}