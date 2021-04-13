const test = require('tape');
const calculator = require('../calculator.js');

test("Prueba de suma de dos enteros ", t => {
    t.plan(1); //Significa cuantos validaciones de prueba se van a hacer.
    t.equal(calculator.add(1,2),3);
});

test("Obtener suma de dos Strings", t => {
    t.plan(1);
    t.equal(calculator.add("1","2"),3);
});

test("Prueba de resta de dos enteros", t => {
    t.plan(1);
    t.equal(calculator.rest(5,3),2);
});


//******************+OTROS METODOS TEST*****************
test("Metodo Ok", t => {
    t.plan(1);
    t.ok(false, "Estado ok"); //Si es vacio, flaso o cero el resultado no es verdadero
});

test("Metodo Error", t => {
    t.plan(1);
    t.error("Error", "Ha ocurrido un Error");
});

test("Metodo Equals", t => {
    t.plan(1);
    t.equal("Texto", "Texto", "Estado son iguales");
});

test("Metodo notEquals", t => {
    t.plan(1);
    t.notEqual(true, false, "Estado no son iguales");
});

test("Metodo looseEquals", t => {
    t.plan(1);
    t.looseEqual(2, "2", "Estado looseEquals");
});

test("Metodo deepEquals", t => {
    t.plan(1);
    t.deepEqual("2", "2", "Estado deepEquals");
});