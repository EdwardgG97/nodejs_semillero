/**
 * Serializaciones:
 * Cuando se va a transmitir datos a traves de la red, necesitamos convertir estructuras de datos en cadenas y para esto necesitamos serializar
 * la mejor forma para serializar estructuras de datos es utilizando JSON.
 * 
 * ADMITE JSON:
 * Cadenas
 * Número primitivos
 * boolean
 * matrices y objetos JavaScript.
 * 
 * NO ADMITE:
 * Maps 
 * Set
 * Reg Exp
 * Dates
 * Array Tipados
 * 
 * JSON.stringify : para serializar
 * JSON.parse : para deserializar
*/

let object = {s:"", n:0, a:[true, false, null]};
let serializacion = JSON.stringify(object);
console.log(serializacion);
let deserializacion = JSON.parse(serializacion);
console.log(deserializacion);

console.log(JSON.stringify(object, null,2)); //dos espacios de sangría
console.log(JSON.parse(JSON.stringify(object, null,2))); //el parse ignora los espacios (sangría) que se le asignan en stringify.

//API de Internacionalización:
//Nos permite formatear numeros -> Monedas, porcentajes, etc.

let euros = Intl.NumberFormat("es", {style:"currency", currency:"EUR"});
console.log(euros.format(10));

let data = [0.05, 0.75, 1];
let formatData = Intl.NumberFormat(undefined, {style:"percent", minimumFractionDigits:1,maximumFractionDigits:1}).format;
console.log(data.map(formatData));

//Numeros en arabe
let arabic = Intl.NumberFormat("ar",{useGrouping:false}).format;
console.log(arabic(123456789));

//Numeros Indios
let indi = Intl.NumberFormat("hi-IN-u-nu-deva").format;
console.log(indi(123456789));

let date = new Date("2021-03-16");
console.log(date);
//Fecha Estados unidos
console.log(Intl.DateTimeFormat("en-US").format(date));
//Fecha Francia
console.log(Intl.DateTimeFormat("fr-FR").format(date));
//Fecha España
console.log(Intl.DateTimeFormat("es-ES").format(date));

//Deletrear día de la semana y mes.
let opts = {weekend:"long",moth:"long",year:"numeric",day:"numeric"};
console.log(Intl.DateTimeFormat("es-US",opts).format(date));

//Digitos de los minutos
opts = {hour:"numeric", minutes:"2-digits", hour12:true, hourCycle:"h12"};
console.log(Intl.DateTimeFormat("es-US", opts).format(date));

//Calendario no cristianos
console.log(Intl.DateTimeFormat("en-u-ca-hebreuw",opts).format(date));

let opts2 = {year:"numeric", era:"short"};

console.log(Intl.DateTimeFormat("en-u-ca-hebreuw",opts2).format(date));

//Budista
console.log(Intl.DateTimeFormat("en-u-ca-buddhist",opts2).format(date));

//Chino
console.log(Intl.DateTimeFormat("en-u-ca-chinese",opts2).format(date));

//Persa
console.log(Intl.DateTimeFormat("en-u-ca-persian",opts).format(date));

/**
 * h11: Media noche 0 y 11 de la noche 11PM
 * h12: Media noche 12
 * h23: Media noche 0 y 11 serian las 23PM
 * h24: Media noche 24
 */
