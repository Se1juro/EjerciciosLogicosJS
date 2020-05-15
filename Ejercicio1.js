/*LOS CUATRO ATLETAS
De cuatro corredores de atletismo se sabe que C ha llegado inmediatamente detras de B,
y D ha llegado en medio de A y C. ¿Podria usted calcular el orden de llagada?

B
C
D
A
*/

let A = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  resultado: function () {
    if (A.c > A.b && A.d > A.b && A.d > A.c && A.d < A.a) {
      return true;
    }
    return false;
  },
  intervalo: setInterval(function () {
    A.a = Math.ceil(Math.random() * 4);
    A.b = Math.ceil(Math.random() * 4);
    A.c = Math.ceil(Math.random() * 4);
    A.d = Math.ceil(Math.random() * 4);
    if (A.resultado()) {
      var regex = /(\d+)/g;
      clearInterval(A.intervalo);
      var posiciones = [];
      let corredorA = ("Atleta A: " + A.a).match(regex);
      let corredorB = ("Atleta B: " + A.b).match(regex);
      let corredorC = ("Atleta C: " + A.c).match(regex);
      let corredorD = ("Atleta D: " + A.d).match(regex);
      posiciones.push(corredorA, corredorB, corredorC, corredorD);
      while (posiciones.length) {
        console.log(posiciones.sort());
      }
     
    }
  }, 10),
};
