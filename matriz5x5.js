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

function imprimirVector(arr) {
  let vector = [];
  arr.forEach((i) => {
    vector.push(i);
  });
  document.write(vector.sort().toString());
  return vector;
}

imprimirVector(matriz);

