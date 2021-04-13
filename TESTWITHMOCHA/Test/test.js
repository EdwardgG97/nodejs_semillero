const calculator = require('../calculator.js');
const assert = require('chai').assert;

describe('Operación con dos enteros', () => {
    before(() => {
        console.log("Soy el Before");
    });

    beforeEach(() => {
        console.log("So el BeforeEach");
    });

    it('Obtener el número 3', () => {
        assert.equal(calculator.add(1, 2), 3);
    });

    it('Obtener el numero 4 de una multiplicación ', () => {
        assert.equal(calculator.multiplica(2, 2), 4);
    });

    after(() => {
        console.log("Soy el After");
    });

    afterEach(() => {
        console.log("Soy el AfterEach");
    });

    //only -> se puede usar varias veces para definir un subconjunto de pruebas para ejecutar:
    //it.only('Obtener ', function(){    });

    //skip -> Mocha que ignore los casos de prueba. Todo lo que se omita se marcará como pendiente y se informará como tal
    //it.skip('');
});

