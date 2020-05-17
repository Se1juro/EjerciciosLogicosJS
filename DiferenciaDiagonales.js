/*Este ejercicio esta realizado para encontrar la diferencia entre la diagonal principal
y la diagonal secundaria de una matriz*/

let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
let diagonalUno = 0;
let diagonalDos = 0;
let resultado = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i == j) {
      diagonalUno += arr[i][j];
    }
    console.log("======================");
    if (i + j == arr.length - 1) {
      diagonalDos += arr[i][j];
    }
  }
}
resultado = Math.abs(diagonalUno - diagonalDos);
console.log("RESULTADO: " + resultado);
