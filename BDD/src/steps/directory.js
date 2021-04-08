const { Given, When, Then } = require('cucumber');
const assert = require('assert').strict;
const restHelper = require('../util/resthelper');
let result;
let response;

//POST
Given('una entidad {}', (x) => {
    result = JSON.parse(x);
});

When('envio una solicitud POST a {}', async (path) => {
    response = await restHelper.postData(`http://localhost:80${path}`, result);
});

Then('se guarda la entidad con respuesta {int}', async (code) => {
    assert.equal(response.status, code);
});

//GET
Given('un id de entidad {int}', (x) => {
    result = x;
});

When('envio una solicitud GET a {}', async (path) => {
    response = await restHelper.getData(`http://localhost:80${path}/${result}`);
});

Then('se obtiene una respuesta {}', async (response2) => {
    assert.deepEqual(response.data, JSON.parse(response2));
});

//DELETE
Given('un id de entidad {int}', (x) => {
    result = x;
});

When('envio una solicitud DELETE a {}', async (path) => {
    response = await restHelper.deleteData(`http://localhost:80${path}/${result}`);
});

Then('se obtiene una respuesta {}', async (response3) => {
    assert.deepEqual(response.status, JSON.parse(response3));
});