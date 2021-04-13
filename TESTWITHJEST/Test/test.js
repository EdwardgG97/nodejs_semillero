const uppercase = require('../uppercase');

describe('Uppercase', () => {
    test('Obtener uppercase en Hello', () => {
        expect(uppercase('hello')).toBe('HELLO');
    });

    beforeAll(()=> {
        console.log("Soy el beforeAll");
    });

    beforeEach(()=>{
        console.log("Soy el beforeEach");
    });
});