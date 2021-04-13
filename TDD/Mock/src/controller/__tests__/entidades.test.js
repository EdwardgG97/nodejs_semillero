import { getEntidades, getSubListById } from '../entidad.js';

const url = 'https://www.solcivil.com/entidades/';

function forEach(items, callback) {
    for (let i = 0; i < items.length; i++) {
        callback(items[i]);
    }
}

describe('Test Mock ', () => {
    it('Obtener lista de entidades', async () => {
        const users = await getEntidades(url);
        expect(users.length).toBeGreaterThan(0);
    });
    /*
    it('Obtener lista de usuarios con promesa', (done) => {
        getUsers(url).then(result => {
            expect(result.length).toBeGreaterThan(0);
            done();
        });
    });

    it('Obtener un usuario por Id', () => {
        return getUsersById(1, url).then(result => {
            expect(result.id).toBe(1);
        });
    });

    it('Obtener un error cuando el usuario no se encuentra', async () => {
        try {
            expect.assertions(1);
            const result = await getUsersById(2, url);
        } catch (error) {
            expect(error.message).toMatch('code 404');
        }
    });

    it('Mock funcion foreach', () => {
        const mockCallBack = jest.fn(x => x * 2);
        forEach([2, 3], mockCallBack);
        //la funcion moc es llamada 2 veces.
        expect(mockCallBack.mock.calls.length).toBe(2);
        expect(mockCallBack.mock.calls[0][0]).toBe(2); //argumentos pasados a la funcion primero
        expect(mockCallBack.mock.calls[1][0]).toBe(3); // Segundo argumento.
        console.log(mockCallBack.mock.calls);//imprimiendo el objetoi completo


        expect(mockCallBack.mock.results[0].value).toBe(4);
        expect(mockCallBack.mock.results[1].value).toBe(6);

        console.log(mockCallBack.mock.results);
    });

    it('Mock valores retorno', () => {
        const mockCallBack = jest.fn();
        mockCallBack.mockReturnValueOnce(2).mockReturnValueOnce('y').mockReturnValueOnce(false);
        console.log(mockCallBack(), mockCallBack(), mockCallBack(), mockCallBack());

        const filterTest = jest.fn();
        filterTest.mockReturnValueOnce(true).mockReturnValueOnce(false);
        const result = [2, 3].filter(i => filterTest(i));
        console.log(result);
        console.log(filterTest.mock.calls);
    });
    */
});