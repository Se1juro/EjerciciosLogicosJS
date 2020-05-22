/*
Reto #1 Longitud del string
Pide a tu usuario que ingrese el nombre de su curso favorito, obtén la longitud de ese 
string y muéstralo en pantalla.
*/

let nombreCurso = prompt("Ingresa el nombre de tu curso favorito: ");
let logintudNombre = nombreCurso.length;
alert("La longitud del nombre de tu curso favorito es: " + logintudNombre);*/

/*
Reto #2 ‘Suma’ de strings
Crea un programa en el que le pidas en 3 variables distintas: nombre, apellido y 
comida favorita. Como salida mostrarás el mensaje Hola, mi nombres es {nombre} {apellido} 
y mi comida favorita es {comida} en un solo string.
*/

let nombrePersona = prompt("Ingresa tu nombre ");
let apellidoPersona = prompt("Ingresa tu apellido ");
let comidaFavorita = prompt("Ingresa tu comida favorita ");

alert("Hola, mi nombre es "+nombrePersona+" "+apellidoPersona+" y mi comida faovirta es "+comidaFavorita);


/*Reto #3 Ajusta las iniciales
Ahora, pedirás a tu usuario que ingrese su nombre, apellido y país de origen en minúsculas. 
Después mostrarás los datos de salida con mayúscula inicial al tratarse de nombres propios.*/

let nombrePersona = prompt("Ingresa tu nombre ").toLocaleLowerCase();
let apellidoPersona = prompt("Ingresa tu apellido ").toLocaleLowerCase();
let paisPersona = prompt("Ingresa tu pais ");

let nombreFinal=nombrePersona[0].toUpperCase()+nombrePersona.slice(1);
let apellidoFinal=apellidoPersona[0].toUpperCase()+apellidoPersona.slice(1);

alert("Tu nombre es: "+nombreFinal+"\nApellido: "+apellidoFinal+"\nPais: "+paisPersona);


/*Reto #4 String fragmentado
Pongámonos más exigentes 💥
Solicita a tu usuario que indique una oración de 10 o más caracteres, la línea de un poema o
canción funcioona excelente. Calcula la longitud del string, pide un número de rango inicial 
y final que esté entre la longitud del string para al final mostrar el fragmento que incluya 
los caracteres en ese intervalo.*/

let oracion;
do {
  oracion = prompt("Ingresa una oracion de 10 o mas caracteres");
  tamañoOracion = oracion.length;
} while (tamañoOracion < 10);
alert("El tamaño de tu oracion es: " + tamañoOracion);

let rangoFinal = 0;
let rangoInicial=0;
do {
    rangoInicial = parseInt(prompt("Ingrese un rango Inicial"));
    rangoFinal = parseInt(prompt("Ingrese un rango Final"));
} while (rangoFinal>tamañoOracion || rangoInicial<0);
alert(oracion)
alert("Los caracteres entre ese rango son: \n"+oracion.slice(rangoInicial,rangoFinal))


/* Reto #5 Mayúsculas y minúsculas
Solicita a tu usuario que indique 2 palabras, donde al mostrarlas en pantalla una estará 
totalmente en mayúsculas y otra en minúsculas ¿fácil, no?*/

let palabra1=prompt("Ingresa una palabra: ")
let palabra2=prompt("Ingresa otra palabra: ")

alert("Palabra 1: "+palabra1.toUpperCase()+"\nPalabra 2: "+palabra2.toLowerCase());

/*Reto #6 Nombres cortos y largos
Ya sabemos trabajar con nombres ¿pero qué pasa si cumple ciertas cualidades?
Tu usuario ingresará su nombre, si tiene una longitud mayor a 5 caracteres mostrarás un 
saludo con su nombre en pantalla. Si tiene menos de 5 caracteres, pedirás su apellido, 
mostrarás el saludo con nombre y apellido. En ambos casos deberás mostrarlos con mayúscula 
inicial.*/

let nombre=prompt("Ingresa tu nombre: ")
if (nombre.length>5) {
    alert("Hola "+nombre[0].toUpperCase()+nombre.slice(1))
}else{
    let apellido=prompt("Ingresa tu apellido: ")
    alert("Hola "+nombre[0].toUpperCase()+nombre.slice(1)+" "+apellido[0].toUpperCase()+apellido.slice(1))
}

/*Reto #7 ¡Hablemos Pig Latin! (Puerco Latino) 🐷
Solo una cosa, pide a tu usuario que ingrese una palabra y tradúcela a Pig Latin.
Espera ¡¿qué?!
PuercoLatino es como el idioma de la “efe”, donde cambiamos las palabras bajo ciertas 
condiciones. En este caso será así:
    La primer consonante de una palabra se pasa al final y se agrega la sílaba “ay”.
    Si una palabra inicia con vocal, se agrega “way” al final.
Ejemplos:
    Platzi 👉 Latzipay
    Abeja 👉 Abejaway
*/
let palabra=prompt("Ingresa una palabra: ")
if (palabra.match(/^[aeiou]{1}.*/i)) {
    alert(palabra+"way")
}else{
    alert(palabra.slice(1)+palabra[0]+"ay")
}