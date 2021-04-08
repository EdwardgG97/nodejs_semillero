const { Given, When, Then } = require('cucumber');
const assert = require('assert').strict;
const restHelper = require('../util/resthelper');
let result;
let response;

//POST
Given('un contacto {}', (x) => {
    result = JSON.parse(x);
});

When('envio una solicitud POST a {}', async (path) => {
    response = await restHelper.postData(`http://localhost:80${path}`, result);
});

Then('yo obtengo el codigo de respuesta {int}', async (code) => {
    assert.equal(response.status, code);
});

//GET
Given('un id de contacto {int}', (x) => {
    result = x;
});

When('envio una solicitud GET a {}', async (path) => {
    response = await restHelper.getData(`http://localhost:80${path}/${result}`);
});

Then('yo obtengo una respuesta {}', async (response2) => {
    assert.deepEqual(response.data, JSON.parse(response2));
});