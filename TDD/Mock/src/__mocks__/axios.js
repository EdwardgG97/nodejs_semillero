const data = [{
    id: 1,
    name: 'Mock Name 1',
    username: 'nameOne',
    email: 'mock@email.com',
    address: 'Mock Address ',
    phone: '123456789',
    website: 'mock.org',
    company: {
        name: 'Mock-Crona-Company',
        catchPhrase: 'Mock CatchPhrase',
        bs: 'lorem ipsum'
    }
}];

export default {
    get: jest.fn(url => {
        if (url === 'https://www.solcivil.com/entidades/') { 
            return Promise.resolve({ //devuelve el objeto completo
                data,
                status: 200
            });
        } else if (url === 'https://www.solcivil.com/entidades/1') {
            return Promise.resolve({ // devuelve el objeto con posicion 0
                data: data[0],
                status: 200
            });
        } else {
            throw new Error('Mock error code 404'); //devuelve el error 404
        }
    })
};