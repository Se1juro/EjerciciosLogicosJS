/*Reto #1 - Número mayor y menor
Escribe un programa que pida al usuario 2 números, mostrando como salida cuál
es el número mayor y la diferencia de uno respecto al otro. En caso de que los
números sean iguales, mostrarlo también en pantalla.
*/

let num1=parseInt(prompt("Ingrese un numero: "));
let num2=parseInt(prompt("Ingrese un numero: "));
let resultado= num1-num2;
if (num1>num2) {
    console.log("El numero "+num1+" es mayor que "+num2+" y su diferencia es: "+resultado)
}else if(num2>num1){
    console.log("El numero "+num2+" es mayor que "+num1+" y su diferencia es: "+resultado)
}else{
    console.log("Los numeros son iguales, su diferencia es: "+resultado);
}
/*Reto #2 - En el rango, por favor.
Pide al usuario que indique 2 números: uno que servirá como límite y otro para comparar. 
Si el segundo número es menor al primero, mostrarás un mensaje diciendo “El número ‘x’ 
se encuentra en el rango, gracias” y en caso contrario dirá “El número ‘x’ excede el límite 
permitido”.
*/

let numLimite=parseInt(prompt("Ingrese un numero limite: "));
let numComparador=parseInt(prompt("Ingrese un numero para comparar: "));
if (numLimite>numComparador) {
    console.log("El numero "+numComparadir+" se encuentra en el rango, gracias");
}else{
    console.log("El numero "+numComparador+" excede el limite permitido")
}

/*Reto #3 - Rangos cambiantes.
Nuevamente pide a tu usuario que indique 3 números: un límite superior, 
un límite inferior y uno de comparación. Si el número de comparación se 
encuentra entre los 2 primeros, comunicarlo en pantalla. En caso estar por 
debajo del límite inferior o por arriba del límite superior, también mostrarlo 
en pantalla.
*/

let numLimiteSuperior=parseInt(prompt("Ingrese un numero limite superior: "));
let numLimiteInferior=parseInt(prompt("Ingrese un numero limite inferior: "));
let numComparador=parseInt(prompt("Ingrese un numero para comparar: "));

if (numComparador<numLimiteSuperior && numComparador>numLimiteInferior) {
    console.log("El numero: "+numComparador+" esta dentro del limite");
}else if(numComparador>numLimiteSuperior){
    console.log("El numero sobrepasa al limite")
}else if(numComparador<numLimiteInferior){
    console.log("El numero es menor al limite inferior requerido")
}

/*Reto #4 - “I like turtles”
Escribe un programa que pida al usuario ingrese su animal favorito, si coloca ‘Tortuga’,
‘tortuga’, ‘TORTUGA’ o cualquier otra variante de la palabra entonces mostrar 
en pantalla “También me gustan las tortugas”. En caso contrario mostrar el mensaje 
“Ese animal es genial, pero prefiero las tortugas”.
*/

let animalFavorito=prompt("Ingresa tu animal favorito");
if (animalFavorito.toUpperCase() === "tortuga".toUpperCase()) {
    alert("Tambien me gustan las tortugas")
}else{
    alert("Ese animal es genial, pero prefiero las tortugas")
}

/*Reto #5 - ¿Cómo está el clima?
Crea un programa que pregunte al usuario si está lloviendo, en caso de responder “sí” 
pregunta si está haciendo mucho viento y si responde “sí” nuevamente muestra un 
mensaje indicando que hace mucho viento para salir con una sombrilla. En caso contrario, 
anima al usuario a que lleve una sombrilla. Para el caso de responder “no” en la primer 
pregunta, entonces solo desea un bonito día.
Considera que las respuestas pueden pasarse a minúsculas para evitar posibles errores. */

let respuestaLluvia = prompt("Esta lloviendo?");

if (respuestaLluvia.toUpperCase() == "si".toUpperCase()) {
  let respuestaViento = prompt("Esta haciendo mucho viento?");
  if (respuestaViento.toUpperCase() == "si".toUpperCase()) {
    alert("Hace mucho viento para salir con sombrilla");
  } else {
    alert("Deberias llevar sombrilla");
  }
} else {
  alert("Ten un bonito dia");
}
/*Reto #6 - Edad permitida
Pide al usuario que ingrese su edad y mostrarás un mensaje correspondiente 
si esta coincide con las siguientes condiciones:
Más de 30 años: Nunca es tarde para aprender ¿Qué curso tomaremos?
Entre 29 y 18 años: Es un momento excelente para impulsar tu carrera.
Menos de 18 años: ¿Sabes hacia dónde dirigir tu futuro? Seguro puedo ayudarte.*/

let edadUsuario = parseInt(prompt("Ingresa tu edad"));
if (edadUsuario>=30) {
    alert("Nunca es tarde para aprender ¿Qué cursos tomaremos?")
}else if(edadUsuario>=18 &&edadUsuario<=29){
    alert("Es un momento excelente para impulsar tu carrera.")
}else{
    alert("¿Sabes hacia donde dirigir tu futuro? Seguro puedo ayudarte")
}

/*Reto #7 - Mensajes opcionales
Crearás un un script para el que el usuario indicará un número entre 1 y 6. 
Como respuesta se le brindará un mensaje según el número leido:
1 - “Hoy aprenderemos sobre prorgamación”
2 - “¿Qué tal tomar un curso de marketing digital?
3 - “Hoy es un gran día para comenzar a aprender de diseño”
4 - ¿Y si aprendemos algo de negocios online?
5 - “Veamos un par de clases sobre producción audiovisual”
6 - “Tal vez sea bueno desarrollar una habilidad blanda en Platzi”
En caso indicar un número distinto, pedir al usuario que ingrese uno en el rango válido. */
let numUsuario = 0;
while (numUsuario < 1 || numUsuario > 6) {
  numUsuario = parseInt(prompt("Ingrese un numero entre 1 y 6"));
  if (numUsuario == 1) {
    alert("Hoy aprenderemos sobre programacion");
  } else if (numUsuario == 2) {
    alert("¿Qué tal tomar un curso de marketing digital?");
  } else if (numUsuario == 3) {
    alert("Hoy es un gran día para comenzar a aprender de diseño”");
  } else if (numUsuario == 4) {
    alert("¿Y si aprendemos algo de negocios online?");
  } else if (numUsuario == 5) {
    alert("Veamos un par de clases sobre producción audiovisual");
  } else if (numUsuario == 6) {
    alert("Tal vez sea bueno desarrollar una habilidad blanda en Platzi");
  }
  alert("Ingresa un numero en el rango indicado");
}
