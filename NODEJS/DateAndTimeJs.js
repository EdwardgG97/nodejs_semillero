/**
 * Date and Times:
 * Es la API de JS para trabajar con fechas y horas. 
*/

let now = new Date();
console.log(now);

let epoch = new Date(0);
console.log(epoch);

let century = new Date(2100,//año 2100
    0, //enero
    1,// primero del mes
    2,3,4,5); //02:03:04.005 hora local -- sin horas queda en hora 12:00 o las cero horas
console.log(century);

//UTC -> Tiempo Universal Coordinado
// Es el principal estándar de tiempo por el cual el mundo regula los relojes
let utc = Date.UTC(2100,0,1);
console.log(utc); //fecha en milisegundos

//Trasformar fecha en milisegundos:
let utc2 = new Date(Date.UTC(2100,0,1));
console.log(utc2);


//Métodos para obtener los datos de las fechas - Igualmente podemos usar método SET para modificar los valorers de la fecha.
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMilliseconds());
console.log(now.getMinutes());
console.log(now.getMonth());
console.log(now.getSeconds());
console.log(now.getTime());
console.log(now.getTimezoneOffset());

//Métodos UTC como estandar
console.log(now.getUTCDate());
console.log(now.getUTCDay());
console.log(now.getUTCFullYear());
console.log(now.getUTCHours());
console.log(now.getUTCMilliseconds());
console.log(now.getUTCMinutes());
console.log(now.getUTCMonth());
console.log(now.getUTCSeconds());

// JavaScript maneja las fechas en milisegundos
// Admite 8.640.000.000.000.000 de milisegundos, equivale a 272.000 años
let time = new Date();
time.setTime(time.getTime()+30000); //30 segundos
console.log(time);

//Agregar milisegundos se podría definir como marcas de tiempo
let startTime = Date.now();
let endTime = Date.now();
console.log(`Tiempo de ejecución ${startTime - endTime}`);

//Formato de fechas, CONVERTIR los objetos de fechas en cadenas.
let fechaText = time.toString();
console.log(fechaText);

let fechaTextUTC = time.toUTCString();
console.log(fechaTextUTC);

let toIsoString = time.toISOString(); //Este formato imprimi, año, mes, dia, hora:minutos:segundos:milisegundos
// T -> Separa la fecha de la hora.
// Z -> 
console.log(toIsoString);

console.log(time.toLocaleString());
console.log(time.toDateString());
console.log(time.toTimeString());
console.log(time.toLocaleDateString())

//Convertir Texto a fecha.
let transform = Date.parse('1997/01/12');
console.log(transform);


//********************+EJERCICIOS******************+:
//Fecha actual 
let fechaActual = new Date();
console.log(fechaActual);

//Modificar fecha actual - fecha nacimiento
let fechaNacimiento = new Date();
fechaNacimiento.setFullYear(1997);
fechaNacimiento.setMonth(0);
fechaNacimiento.setDate(12);
fechaNacimiento.setHours(8);
fechaNacimiento.setMinutes(45);
fechaNacimiento.setSeconds(05);
console.log(fechaNacimiento);
console.log(fechaNacimiento.toLocaleString());
console.log(fechaNacimiento.toUTCString());
console.log(fechaActual.getTime() -fechaNacimiento.getTime());
//valores UTC
let utcAux = Date.UTC(1997,0,12,8,45,05);
console.log(Date(utcAux));


if (utcAux == fechaNacimiento) {
    console.log("Fechas iguales");
} else {
    console.log("No son iguales");
}