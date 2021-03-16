
/**
 * API DE URL: Se utiliza una clase que divide en partes una URL
 */

let url2 = new URL("https://example.com:8000/path/name?q=term#fragment");
console.log(url2.href);
console.log(url2.origin);
console.log(url2.protocol);
console.log(url2.host);
console.log(url2.hostname);
console.log(url2.port);
console.log(url2.pathname);
console.log(url2.search);
console.log(url2.hash);

let url3 = new URL("ftp://admin:1337!@ftp.example.com/");
console.log(url3.username);
console.log(url3.password);
console.log(url3.protocol);

let url4 = new URL("https://example.com");
console.log(url4.pathname = "api/search");
console.log(url4.search = "q-test");
console.log(url4.toString());

let url5 = new URL("https://example.com/search");
console.log(url5.search);
console.log(url5.searchParams.append("q", "test"));
console.log(url5.search);
url5.searchParams.set("q", "x");
console.log(url5.search);
console.log(url5.searchParams.get("q"));
console.log(url5.searchParams.has("q"));
url5.searchParams.append("others", "w");
console.log(url5.search);
url5.searchParams.append("others", "s");
console.log(url5.search);
console.log(url5.searchParams.getAll("others"));
console.log(url5.searchParams.sort());
console.log(url5.search);
console.log([...url5.searchParams]);
url5.searchParams.delete("others");
console.log(url5.search);


/**
 * TIMERS :
 * Son Funciones que solicitan al navegador que invoque cierta función despues de cierto tiempo.
 * Funciona en todos los navegadores.
 * seTimeout: Ejecución de función tras un tiempo en milisegundos
 * setInterval: Ejecución de funciones repetitivas tras un tiempo en milisegundos
 */

setTimeout(() => { console.log("Ready..."); }, 1000); //Primer parametro función a ejecutar, segundo parametro tiempo en milisegundos
setTimeout(() => { console.log("Set..."); }, 2000);
setTimeout(() => { console.log("Go..."); }, 3000);

let clock = setInterval(() => { //Primer parametro función a ejecutar, segundo parametro tiempo en milisegundos
    console.clear();
    console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout(()=>{clearInterval(clock);}, 10000);