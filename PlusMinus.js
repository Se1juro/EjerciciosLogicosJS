arr = [1, 1, 0, -1, -1];

let contadorPositivos=0;
let contadorNegativos=0;
let contadorCeros=0;
arr.forEach((i) => {
    console.log(i);
  if (i > 0) {
    contadorPositivos++;
  }
  if (i < 0) {
    contadorNegativos++;
  }
  if (i == 0) {
    contadorCeros++;
  }
});
let tamanoArr = arr.length;

let resultadoPos = contadorPositivos / tamanoArr;
let resultadoNeg = contadorNegativos / tamanoArr;
let resultadoCeros = contadorCeros / tamanoArr;

console.log(resultadoPos)