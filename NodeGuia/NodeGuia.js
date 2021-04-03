/**
 * ******************INTRODUCCIÓN***************** CAP.1
 */
const http = require('http')

const hostname = '127.0.0.1'
const port = '8080'

const server = http.createServer((req, res) => {
  res.statusCode = 200 //Establecemos la propiedad status Code en 200, para indicar una respuesta exitosa.
  res.setHeader('Content-Type', 'text/plain') //Encabezado Content-Type.
  res.end('Hello World!\n') //Finalizar respuesta con el texto a mostrar
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

/**
 * ********* BIBLIOTECAS MÁS USADAS PARA NODEJS******************
 * *AdoinsJs
 * *Egg.js
 * *Express
 * *Fastify
 * *Gatsby
 * *hapi
 * *koa
 * *Loopback.io
 * *Meteor
 * *Micro
 * *NestJS
 * *Next.js
 * *Nx
 * *Sapper
 * *Socker.io
 * *Strapi -> 
 * *ESLint -> Modulo que me valida la estructura y errores de archivos JS
 */

/*  
 * *************************** BREVE HISTORIA DE Node.js ******************************* CAP.2
 *
 * *Node.js solo tiene once (12) años. Nace en el 2009.
 * *JavaScript tiene 24 años
 * *Web tiene 31 años. 
 * 
 * Hace muchos años el creador de JS (Netscape) desarrollo el lenguaje JS para el servidor conocido
 * como LiveWire, del cual no se popularizó.
 * 
 * Node usa el motor V8 para su ejecución.
 * 
 * La ultima versión lanzada de Node(15), fue en el año 2020.
 * 
 * "nvm" es una forma popular de ejecutar Node.js, permite cambiar de versiones de Node fácilmente.
 * 
 * *Puedes usar Babel en el Navegador (JS) para transofrmar su código para que sea compatible con ES5,
 * antes de enviarlo al navegador, PERO en Node.js no se necesitará.
 * 
 * *En Node se usa "require()" para importar modulos.
 * *En JS se usa "import()" para importar modulos.
*/

/**
 * *************************** EMPEZANDO ******************************* CAP.2
 * JavaScript es compilado internamente por V8 con compilación "Just-in-Time"(JIT) para acelerar la ejecución.
 * Nuestras aplicaciones ahora pueden ejecutarse durante horas dentro de un navegador, en lugar de ser solo unas 
 * pocas relgas de validación de formularios o simples scripts.
 * 
 * *Ejecutar un archivo node es sencillo desde la terminal con el comando "node app.js" donde app.js es el nombre del archivo node
 */
//Para finalizar un programa de Node.js se usa:
process.exit(0);

//El módulo principal de Node.js es "process"
//process no require un "requisito", está disponible automáticamente.
console.log(process.env.NODE_ENV);

/**
 * REPL también conocido como Read Evaluate Print Loop es un entorno de lenguaje de programación 
 * (básicamente una ventana de consola) que toma una sola expresión como entrada del usuario y 
 * devuelve el resultado a la consola después de la ejecución.
 */

//console es un modulo muy util a usar en Node 
console.log(global);
//Progress es un paquete increíble para crear una barra de progreso en la consola. Instálalo usandonpm install progress
const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)