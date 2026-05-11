# 🎮 Simón Dice — Versión 1

Implementación en JavaScript del clásico juego electrónico **Simón Dice**, desarrollado para ejecutarse en Node.js desde la línea de comandos.

---

## 📋 Descripción

Simón Dice es un juego que consiste en reproducir una secuencia de colores generada aleatoriamente por la máquina. Cada vez que el jugador acierta, la secuencia se alarga en un color más. El juego termina cuando el jugador falla o completa la secuencia máxima.

- **4 colores disponibles:** Rojo, Verde, Azul y Dorado
- **Secuencia inicial:** 3 colores
- **Secuencia máxima:** `MAX_COLORES_SEQ` (12 por defecto)

---

## 🚀 Cómo ejecutar

Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego, desde la terminal en la carpeta del proyecto:

```bash
node simon.js
```

---

## 🕹️ Cómo jugar

1. Introduce tu nombre al inicio
2. Observa y memoriza la secuencia de colores mostrada en pantalla
3. Pulsa **Enter** cuando estés listo
4. Introduce los colores uno a uno usando su letra inicial:

| Tecla | Color  |
|-------|--------|
| `R`   | Rojo   |
| `V`   | Verde  |
| `A`   | Azul   |
| `D`   | Dorado |

> Las letras pueden introducirse en mayúsculas o minúsculas.

---

## 📁 Estructura del código

### Constantes

```javascript
const tColores = { Rojo: 0, Verde: 1, Azul: 2, Dorado: 3 };
const MAX_COLORES_SEQ = 12;
```

### Funciones

| Función | Descripción |
|---|---|
| `charToColor(color)` | Convierte una letra (R/V/A/D) al valor del enumerado |
| `intToColor(numero)` | Convierte un número entero al valor del enumerado |
| `mostrarColor(color)` | Convierte un valor del enumerado a texto legible |
| `generarSecuencia(numColores)` | Genera el array de colores aleatorios |
| `comprobarColor(secuencia, indice, color)` | Comprueba si el color introducido es correcto |
| `mostrarSecuencia(secuencia, numero)` | Muestra los primeros N colores de la secuencia |
| `comenzarJuego(nombre, rl)` | Función principal que controla el flujo del juego |
| `pregunta(rl, texto)` | Función auxiliar para leer input del usuario |

---

## 💡 Detalles de implementación

- `tColores` actúa como **enumerado** simulado con un objeto de JavaScript
- La secuencia completa se genera **una sola vez** al inicio; en cada ronda se muestra una porción más larga
- Si el usuario introduce un color inválido, el programa **vuelve a pedirlo** hasta obtener uno correcto
- Se usa `async/await` junto con `readline` de Node.js para gestionar la entrada del usuario

---

## 📌 Ejemplo de ejecución

```
¡Bienvenido a Simon dice!
¿Cuál es tu nombre? Homer
Hola Homer, pulsa una tecla para empezar a jugar.

Secuencia numero 1: Rojo - Verde - Azul
Memoriza la secuencia y pulsa Enter para continuar...

Homer, introduce la secuencia de 3 colores:
(R = Rojo, V = Verde, A = Azul, D = Dorado)
Color 1: r
Color 2: v
Color 3: a
Enhorabuena, has pasado de ronda.
```

---

## 👨‍💻 Autor

Oke Marco Onotafe Martin — Proyecto Final JavaScript, marzo 2026
