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

//Number. //+ TAB

//Comando de puntos
/**
 * .help: muestra la ayuda de los comandos de puntos
.editor: habilita el modo editor para escribir código JavaScript multilínea con facilidad. Una vez que esté en este modo, ingrese ctrl-D para ejecutar el código que escribió.
.break: al ingresar una expresión de varias líneas, ingresar el comando .break cancelará la entrada adicional. Igual que presionar ctrl-C.
.clear: restablece el contexto REPL a un objeto vacío y borra cualquier expresión de varias líneas que se esté ingresando actualmente.
.load: carga un archivo JavaScript, relativo al directorio de trabajo actual
.save: guarda todo lo que ingresó en la sesión REPL en un archivo (especifique el nombre del archivo)
.exit: sale de la respuesta (lo mismo que presionar ctrl-C dos veces)

**********************************************************************************************************************+
%s formatear una variable como una cadena
%d formatear una variable como un número
%i formatear una variable como su parte entera solamente
%o formatear una variable como un objeto
 */

const x = 1
const y = 2
const z = 3
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of y is ' + y + 
  ' and has been checked .. how many times?'
)

/**
 * Progress es un paquete increíble para crear una barra de progreso en la consola. Instálalo usandonpm install progress
 * Este fragmento crea una barra de progreso de 10 pasos y cada 100 ms se completa un paso. Cuando la barra se completa, 
 * borramos el intervalo:
 */

 const ProgressBar = require('progress')

 const bar = new ProgressBar(':bar', { total: 10 })
 const timer = setInterval(() => {
   bar.tick()
   if (bar.complete) {
     clearInterval(timer)
   }
 }, 100)

 /**
  * ************************************************ ReadLine*******************************
  */

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`)
    readline.close()
  })

  /**
   * Para importar archivos NodeJS.
   * Ejemplo: Importar archivo library.js 
   */

  //const library = require('./library')


  /**
   * ¿Cuál es la diferencia entre module.exportsy exports?
   * El primero expone el objeto al que apunta. Este último expone las propiedades del objeto al que apunta.
   */

  /**
   * ********************************************* npm *****************************************************
   * 
   * npm es el administrador de paquetes estándar para Node.js.
   * 
   * npm install : instalará todo lo que el proyecto necesita, en la node_modulescarpeta, y lo creará si aún no existe.
   * 
   * A menudo verá más banderas agregadas a este comando:
   * --saveinstala y agrega la entrada a las dependencias delpackage.json archivo
   * --save-devinstala y agrega la entrada al package.jsonarchivo devDependencies
   * 
   * npm update: npm buscará en todos los paquetes una versión más reciente que satisfaga sus restricciones de control de versiones.
   * 
   * npm root -global : Ruta de paquetes globales.
   * 
   * El package.json => archivo es una especie de manifiesto para su proyecto. Puede hacer muchas cosas sin ninguna relación. 
   * Es un repositorio central de configuración de herramientas, por ejemplo. 
   * También es dónde npmy yarnalmacena los nombres y versiones de todos los paquetes instalados.
   * 
   * INSTALAR PAQUETES EN PRODUCION CON:
   * 
   * npm install <PACKAGENAME>
   * yarn add <PACKAGENAME>
   * 
   * INSTALAR PAQUETES COMO DESARROLLO CON:
   * npm install --save-dev <PACKAGENAME>
   * yarn add --dev <PACKAGENAME>
   * 
   * 
   * VERSION PAQUETES INSTALDOS NPM:
   * npm list o npm list -g
   * 
   * 
   * DESINSTALAR MODULOS NPM
   * npm uninstall <package-name> -S => Usando la -Sbandera, o --save, esta operación también eliminará la referencia en el package.jsonarchivo.
   * 
   * NPX:
   * npx le permite ejecutar código creado con Node.js y publicado a través del registro npm.
   * 
   * 
   */

   //npx cowsay "Hello";

  //Una setTimeout() devolución de llamada con un retraso de 0 ms es muy similar a setImmediate(). 
  //El orden de ejecución dependerá de varios factores, pero ambos se ejecutarán en la siguiente iteración del bucle de eventos.
 
 
  /** 
  * **************************** PROMESAS ********************************
  * 
  * Las promesas son una forma de lidiar con el código asincrónico, sin quedar atrapado en el infierno de 
  * la devolución de llamada .
  * 
  * Una vez que se ha llamado a una promesa, comenzará en un estado pendiente . Esto significa que la función que llama continúa ejecutándose, mientras que la promesa está pendiente hasta que se resuelve, dando a la función que llama los datos que se estaban solicitando.
  * La promesa creado finalmente terminará en un estado resuelto , o en un estado rechazada , llamando a las funciones de devolución de llamada respectivos (pasados a thene catch) al terminar.
  */

   const getFile = (fileName) => {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, (err, data) => {
        if (err) {
          reject(err)  // calling `reject` will cause the promise to fail with or without the error passed as an argument
          return        // and we don't want to go any further
        }
        resolve(data)
      })
    })
  }
  
  getFile('/etc/passwd')
  .then(data => console.log(data))
  .catch(err => console.error(err))

//Si necesita sincronizar diferentes promesas, lo Promise.all()ayuda a definir una lista de promesas y a ejecutar algo cuando todas estén resueltas.

/**
 * **************************** ASYNC AWAIT **************
 * 
 * Las funciones asincrónicas son una combinación de promesas y generadores y, básicamente, son una abstracción de nivel superior a las promesas. Permítanme repetir: async / await se basa en promesas .
 */

 const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000)
  })
}

const doSomething = async () => {
  console.log(await doSomethingAsync())
}

console.log('Before')
doSomething()
console.log('After')

/**
 * ****************************** EventEmitter *********************************
 * 
 * Este módulo, en particular, ofrece la EventEmitterclase, que usaremos para manejar nuestros eventos.
 * 
 * * emit: se utiliza para desencadenar un evento
 * * on: se usa para agregar una función de devolución de llamada que se ejecutará cuando se active el evento
 */

 eventEmitter.on('start', () => {
  console.log('started')
})

eventEmitter.emit('start');

/**
 * ****************************** MODULO FS***************************
 * 
 * El fsmódulo proporciona una gran cantidad de funciones muy útiles para acceder e interactuar con el sistema de archivos.
 */
 const fs = require('fs');

/**
 * ****************************** MODULO OS*****************************
 * 
 * Este módulo proporciona muchas funciones que puede utilizar para recuperar información del sistema operativo subyacente y 
 * la computadora en la que se ejecuta el programa e interactuar con él.
 */
 const os = require('os');

/**
 * *************************** MODULO HTTP ***********************************
 * 
 * El módulo principal de HTTP es un módulo clave para la red Node.js.
 */
 const http = require('http');

 /**
  * ****************************** MODULO BUFFER *****************************
  * 
  * Los búferes se introdujeron para ayudar a los desarrolladores a lidiar con datos binarios, en un ecosistema que tradicionalmente solo se ocupaba de cadenas en lugar de binarios.
  */

  const buf = Buffer.from('Hey!');

  /**
   * ************************** TYPESCRIPT **********************************
   * 
   * TypeScript es un lenguaje de código abierto muy popular mantenido y desarrollado por Microsoft, es amado y utilizado por muchos desarrolladores de software en todo el mundo.
   * Básicamente, es un superconjunto de JavaScript que agrega nuevas capacidades al lenguaje. La adición más notable son las definiciones de tipo estático, algo que no está presente en JavaScript simple.
   * 
   * // Instalar Typescript => npm install typescript
   * 
   * Ahora podemos compilarlo en JavaScript usando el tsccomando en la terminal.
   */

  //tsc example.ts

  /**
   * Este comando dará como resultado un nuevo archivo llamado example.jsque podemos ejecutar usando Node.js. 
   * 
   * TypeScript está bien establecido en el mundo de Node.js y es utilizado por muchas empresas, proyectos de código abierto, herramientas y marcos. 
   */