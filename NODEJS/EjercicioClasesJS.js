function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

//Funciona para rangos textuales, de fechas y númerico. Devuelve verdadero si x está en el rango.
Persona.prototype = {
    crearEmail: function () {
        if (this.email === null) {
            this.email = this.nombre.charAt(0).toLowerCase() + this.apellido.toLowerCase() + "@nodejs.com";
        }
        return this.email;
    },

    toString: function () {
        return "Su email es: " + this.email + ", puede continuar.";
    }
};

let persona = new Persona("Edward", "Garcia", null);
console.log(persona.crearEmail());
console.log(persona.toString());

//Clase nuevo standar ES6
class PersonaCurrent {

    constructor(nombre, apellido, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }

    crearEmail() {
        if (this.email === null) {
            this.email = this.nombre.charAt(0).toLowerCase() + this.apellido.toLowerCase() + "@nodejs.com";
        }
        return this.email;
    }

    toStringEmail() {
        return "Su email es: " + this.email + ", puede continuar.";
    }
}

let personaCurrent = new PersonaCurrent("Edward", "Garcia", null);
console.log(personaCurrent.crearEmail());
console.log(personaCurrent.toStringEmail());

class newObjPersona extends Persona {
    constructor(nombre, apellido, email, sexo) {
        super(nombre, apellido, email);
        if (sexo === "M") {
            this.sexo = "Masculino";
        } else if (sexo === "F") {
            this.sexo = "Femenino";
        } else {
            this.sexo = "Indefinido";
        }
    }

    toStringSexo() {
        return "Y su sexo es: " + this.sexo;
    }
}

let newPersona = new newObjPersona("Edward", "Garcia", null, "M");
console.log(newPersona.crearEmail());
console.log(newPersona.toString());
console.log(newPersona.toStringSexo());

//Clase como expresión
let Animal = class {
    constructor(animal) {
        if (animal === "Gato") {
            this.animal = "Felino";
        } else if (animal === "Gato") {
            this.animal = "Canino";
        }

    }
}

console.log(new Animal("Gato").animal);