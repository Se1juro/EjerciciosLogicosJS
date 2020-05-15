/*PRIMER/Segundo EJERCICIO
Reto #1 “Hola Mundo”
Instrucciones: este es un clásico de clásicos, pero haremos un pequeño cambio. 
En lugar de solo imprimir un mensaje en pantalla, pedirás al usuario que digite 
un nombre y mostrarás en pantalla lo siguiente: Hola, [nombre]

Reto #2 “Hola… nombre y apellido:”
Instrucciones: Ahora que sabemos incluir nombres, podemos agregar más datos. 
Intentemos con un apellido para tener algo así: ``Hola, [nombre] [apellido]```
*/

let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");

console.log("Hola " + nombre + " " + apellido);

/*TERCER EJERCICIO

Reto #3 “Mensaje multilínea”

Instrucciones: seguro has visto que en Platzi hay más de 600 cursos 
¿puedes mostrar a que categorías corresponden en una sola línea de código?
Debe mostrarse así:

Platzi cuenta con cursos de:
[categoría1]
[categoría2]
[categoría3]
[categoría4]
[categoría5]
[categoría6]
*/

let cursos_categoria = ["Ingenieria", "Diseño", "Marketing"];
console.log("Platzi cuenta con cursos de:");
let i = 0;
for (let i = 0; i < cursos_categoria.length; i++) {
  console.log(cursos_categoria[i]);
}

/*
Reto #4 “Suma de enteros”
Instrucciones: otro clásico conocido, donde pedirás al usuario que ingrese 2 números y 
muestre en pantalla el resultado. Si quieres añadir más dificultad puedes utilizar 
números con punto decimal y especificar el número de decimales después del punto.
Ejemplo: 2.5633 + 5.6883 = 8.25
*/
let numero1 = prompt("Ingrese un numero");
let numero2 = prompt("Ingrese otro numero");
let resultado = sumaDosNumeros(numero1, numero2);
console.log(
  "El resultado de la suma entre " +
    numero1 +
    " y " +
    numero2 +
    " es: " +
    resultado
);
function sumaDosNumeros(a, b) {
  let num1 = parseFloat(a);
  let num2 = parseFloat(b);
  let resultado = num1 + num2;
  return resultado;
}

/*
Reto #5 “Suma y multiplicación”

Instrucciones: añadiendo un extra al reto anterior ahora el usuario ingresará 3 números, 
sumarás los 2 primeros y el resultado será multiplicado por el tercero. 
Añade las consideraciones del punto decimal del reto anterior.
Ejemplo:

Datos de entrada:2, 3, 4
Resultado:20
*/
let n1 = prompt("Ingrese un numero");
let n2 = prompt("Ingrese otro numero");
let n3 = prompt("Ingrese un tercer numero");
let r = sumaDosNumeros(n1, n2) * n3;
console.log(
  "El resultado de la suma entre " +
    n1 +
    " y " +
    n2 +
    " Y su resultado multiplicado por " +
    n3 +
    " da: " +
    r
);

/*
Reto #6 “Resta de pizzas”
Instrucciones: llegaste a una fiesta con X cantidad de rebanadas de pizza 
(indicadas por el usuario), después de un rato se consumió Y cantidad de rebanadas 
y quedan Z. Fácil ¿cierto?
El reto está en que expreses lo que sucede es una forma comprensible para cualquier
persona, prescindible pensar en tus usuarios 😉
*/
let cantidadPizzasLlegaron = parseInt(
  prompt("Con cuantas porciones de pizza llegaste?")
);
let cantidadPizzasComiste = parseInt(prompt("Cuantas porciones te comiste?"));
let porcionesRestantes = cantidadPizzasLlegaron - cantidadPizzasComiste;
if (porcionesRestantes < 0) {
  porcionesRestantes = 0;
}
console.log(
  "Muy bien, si llegaste con " +
    cantidadPizzasLlegaron +
    " porciones de pizza y te comiste " +
    cantidadPizzasComiste +
    " Eso quiere decir que te quedan " +
    porcionesRestantes +
    " porciones"
);

/*
Reto #7 “Edad futura y pasada”
Instrucciones: pide al usuario que indique su nombre y su edad. 
Como mensaje de salida le indicarás que edad tuvo el año pasado y 
cuantos años tendrá el siguiente año.
Ejemplo: [nombre] el año pasado tenías X años y el próximo año cumplirás Y años.
*/

let nombre_usuario = prompt("Como te llamas?");
let edad_actual = parseInt(prompt("Cual es tu edad actual?"));

let edad_pasada = edad_actual - 1;
let edad_futuro = edad_actual + 1;

console.log(
  nombre_usuario +
    " el año pasado tenias " +
    edad_pasada +
    " y el proximo año tendras " +
    edad_futuro
);

/*Reto #8 “Divide la cuenta”
Instrucciones: vas con tus amigos a tu restaurante favorito y acuerdan dividir la cuenta. 
Para facilitar las cosa pedirás al usuario que indique el total a pagar, entre cuantas 
personas se dvidirá la cuenta, porcentaje de propina a incluir, un porcentaje de impuestos, 
total a pagar incluyendo propina más impuestos y el total a pagar por cada persona.
*/
let factura_parcial = parseInt(prompt("Cuanto debes pagar?"));
let divisionCuenta = parseInt(
  prompt("Entre cuantas personas dividiras la cuenta?")
);
let porcentajePropina = parseInt(
  prompt("Indica el porcentaje de propina que quieres pagar: ")
);
let porcentajeImpuestos = parseInt(
  prompt("Cual es el porcentaje de impuestos?")
);

let valorPagarImpuestos = (factura_parcial * porcentajeImpuestos) / 100;
let valorPagarPropina = (factura_parcial * porcentajePropina) / 100;
let valorTotal = valorPagarPropina + valorPagarImpuestos + factura_parcial;
console.log("Tienes que pagar en total: " + valorTotal);
console.log(
  "Son : " +
    divisionCuenta +
    " personas, les toca pagar de a " +
    valorTotal / divisionCuenta
);

/*Reto #9 “Calculando días”
Instrucciones: escribe un programa al que le indiques una cantidad de días y 
como resultado deberá mostrar cuantas horas, minutos y segundos hay en dicha 
cantidad de días.
*/
let cantidadDias = parseInt(prompt("Ingrese una cantidad de dias"));

let cantidadHoras = cantidadDias * 24;
let cantidadMinutos = cantidadHoras * 60;
let cantidadSegundos = cantidadMinutos * 60;

console.log(
  "En " +
    cantidadDias +
    " hay " +
    cantidadHoras +
    " horas, " +
    cantidadMinutos +
    " minutos, " +
    cantidadSegundos +
    " segundos"
);

/*Reto #10 “Conversor de millas”
Instrucciones: hay 1.609344 km en una milla (mi). Escribe un programa en el que 
el usuario indique una cantidad de millas y muestre en pantalla el resultado 
convertido a kilómetros.
*/
let cantidadMillas = parseInt(prompt("Ingrese una cantidad de millas: "));
let cantidadKm = cantidadMillas * 1.609344;
console.log("Hay " + cantidadKm + " KM en " + cantidadMillas + " Millas");

/*Reto #11 “Cuantas veces un número en otro”
Instrucciones: pide al usuario ingresar un número mayor a 1000 y otro menor a 100. 
Indica de una forma sencilla de entender al usuario cuantas veces cabe el número 
menor a 100 en el número mayor a 1000
*/
let numeroMayor = 0;
do {
  numeroMayor = parseInt(prompt("Ingrese un numero mayor de 1000"));
  if (numeroMayor < 1000) {
    alert("Ingrese un numero mayor a 1000");
  }
} while (numeroMayor < 1000);
let numeroMenor = 0;
do {
  numeroMenor = parseInt(prompt("Ingrese un numero menor a 100"));
  if (numeroMenor > 100) {
    alert("Ingrese un numero menor a 100");
  }
} while (numeroMenor > 100);

let cuantasVeces1000 = Math.trunc(1000 / numeroMayor);
console.log(
  "El numero " + numeroMayor + " cabe en 1000 " + cuantasVeces1000 + " veces"
);
let cuantasVeces100 = Math.trunc(100 / numeroMenor);
console.log(
  "El numero " + numeroMenor + " cabe en 100 " + cuantasVeces100 + " veces"
);
