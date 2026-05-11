# 🎮 Simon Dice v2

Juego de memoria por consola desarrollado en **Node.js** para la asignatura de Lenguajes de Marcas (Grado Superior DAM, curso 2025/2026).

---

## 📋 Descripción

Simon Dice es un juego en el que la máquina genera una secuencia de colores que el jugador debe memorizar y reproducir correctamente. En esta segunda versión se añade un **modo difícil**, un **sistema de ayudas** y un **menú de selección** de modo.

---

## 🕹️ Modos de juego

| Modo | Colores disponibles | Secuencias |
|------|-------------------|------------|
| Fácil | 4 (Rojo, Verde, Azul, Dorado) | 15 |
| Difícil | 7 (+ Blanco, Marrón, Naranja) | 15 |

---

## 🆘 Sistema de ayudas

- Cada partida comienza con **3 ayudas**.
- Para pedir una ayuda, introduce **`x`** cuando se te pida un color.
- La máquina revelará el color correcto en esa posición y descontará una ayuda.
- Si no te quedan ayudas, se mostrará un aviso y deberás adivinarlo tú.
- Las ayudas están disponibles en **ambos modos**.

---

## ▶️ Cómo ejecutar

Asegúrate de tener **Node.js** instalado y ejecuta:

```bash
node simon_dice.js
```

---

## 📖 Cómo jugar

1. Introduce tu nombre.
2. Elige una opción del menú:
   - `0` → Salir
   - `1` → Modo sencillo
   - `2` → Modo difícil
3. Memoriza la secuencia de colores mostrada en pantalla.
4. Pulsa **Enter** para ocultarla.
5. Introduce los colores uno a uno usando su letra:

| Letra | Color |
|-------|-------|
| R | Rojo |
| V | Verde |
| A | Azul |
| D | Dorado |
| B | Blanco *(solo modo difícil)* |
| M | Marrón *(solo modo difícil)* |
| N | Naranja *(solo modo difícil)* |
| x | Pedir ayuda |

6. Si aciertas toda la secuencia, pasas a la siguiente ronda (una posición más larga).
7. El juego termina cuando fallas un color o completas las 15 secuencias.

---

## 🗂️ Estructura del código

```
simon_dice.js
│
├── Constantes y enums
│   ├── tColores       → Enumerado con los 7 colores
│   ├── tModo          → Enumerado FACIL / DIFICIL
│   ├── MAX_COLORES_SEQ      → 15 (longitud máxima de secuencia)
│   ├── MAX_COLORES_FACIL    → 4
│   └── MAX_COLORES_DIFICIL  → 7
│
├── Funciones de conversión
│   ├── charToColor(color)       → Letra → tColores (o 'AYUDA')
│   ├── intToColor(numero)       → Número → tColores
│   └── mostrarColor(color)      → tColores → String
│
├── Funciones de juego
│   ├── generarSecuencia(modo)              → Genera la secuencia aleatoria
│   ├── comprobarColor(seq, indice, color)  → Comprueba si el color es correcto
│   ├── mostrarSecuencia(seq, numero, modo) → Muestra la secuencia en pantalla
│   └── utilizarAyuda(seq, indice, ayudas)  → Gestiona el sistema de ayudas
│
└── Control principal
    ├── comenzarJuego(nombre, modo, rl) → Bucle principal de la partida
    ├── pregunta(rl, texto)             → Lectura de teclado (Promise)
    └── main()                          → Menú y arranque del programa
```

---

## 💡 Ejemplo de partida (modo difícil)

```
¡Bienvenido a Simon dice!
¿Cuál es tu nombre? Jonathan
Hola Jonathan!

Elija una opción para continuar:
0: Salir.
1: Jugar en modo sencillo.
2: Jugar en modo difícil.
Opción: 2

Sequence number 1: Azul - Naranja - Marrón
Memoriza la secuencia y pulsa Enter para continuar...

Ayudas disponibles: 3
Jonathan, introduce la secuencia de 3 colores:
(R = Rojo, V = Verde, A = Azul, D = Dorado, B = Blanco, M = Marrón, N = Naranja, x = Ayuda)
Color 1: A
Color 2: x
El siguiente color es el Naranja. Te quedan 2 ayudas!
Color 2: N
Color 3: M
Enhorabuena, has acertado la secuencia número 1.
```

---

## 👨‍💻 Autor

Oke Marco Onotafe Martin — Proyecto Final JavaScript, marzo 2026
