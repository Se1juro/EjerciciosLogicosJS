let s = "12:45:54PM"; //PASO LA CADENA
let estado = s.substr(8, 2).toUpperCase(); //SACO EL ESTADO, SI ES AM O PM
let horas = "0"+parseInt(s.substr(0, 2)); // SACO LOS DOS PRIMEROS DIGITOS QUE SON LA HORA,
                                        //LO UNICO QUE CAMBIA, DEBO AGREGARLE 0, PARA QUE LA MUESTRE TIPO 04, 05, ETC
if (estado == "PM") {
  horas = parseInt(s.substr(0, 2)) + 12; //SI ESTA EL ESTADO EN PM, SE LE SUMARIA 12 HORAS PARA ENCAJAR CON FORMATO MILITAR
  if (horas==24) { //PERO EN CASO DE QUE LAS HORAS DEN 24 EN ESTADO PM, SE CAMBIARIAN A 12, DEBIDO A QUE LAS 12 PM SE REPRESENTAN COMO 12 Y NO COMO 24
      horas=12;
  }
}
if (horas == 12 && estado=="AM") { //SI EL ESTADO ES AM Y LLEGAMOS A LAS 12 HORAS, CAMBIA EL 12: POR UN 00:
  horas = 0 + "" + 0;
}
let cuerpo = s.substr(2, 6); //SACO LOS MINUTOS Y SEGUNDOS DE LA FECHA

console.log(horas + cuerpo);
