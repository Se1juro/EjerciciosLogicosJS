let matriz = new Array(5);
let myVar;
for (let i = 0; i < 5; i++) {
  matriz[i] = new Array(5);
  for (let j = 0; j < 5; j++) {
    const palabra = prompt("Pon una palabra", "");
    matriz[i][j] = palabra;
    console.log("Posicion: " + i + ", " + j + " palabra: " + palabra);
  }
}

function imprimirVector(array) {
  let vector = new Array(25);
  let contadorPos = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      vector[contadorPos] = array[i][j];
      contadorPos++;
    }
  }
  console.log("tamaño: " + vector.length);
  console.log("Vector normal: " + vector.toString());
  console.log("Vector ordenado: " + vector.sort());
}

imprimirVector(matriz);
