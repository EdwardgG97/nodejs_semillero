var Cloudant = require('@cloudant/cloudant');

const dbname = 'semillero';

var cloudant = new Cloudant({
    url: 'https://16eece4e-4e4d-41e8-901f-14db4cb2d2c4-bluemix.cloudantnosqldb.appdomain.cloud', plugins: {
        iamauth:
            { iamApiKey: '0s_O_hGocSdcN_bVRUokJjJh8vO8HB5D0mp2q7jkSkIZ' }
    }
});

db = cloudant.db.use(dbname);
/*let createDatabase = function (callback) {
    console.log("Creating database '" + dbname + "'");
    cloudant.db.create(dbname, function (err, data) {
        console.log('Error:', err);
        console.log('Data:', data);
        db = cloudant.db.use(dbname);
        callback(err, data);
    });
};
*/

//Listar base de datos
cloudant.db.list(function (err, body) {
    body.forEach(function (db) {
        console.log(db);
    });
});

//CRUD

//Creación de un documento
var createDocument = function (callback) {
    console.log("Creating document");
    // especificar el ID del documento para que pueda actualizarlo y suprimirlo posteriormente
    db.insert({
        _id: 'doc_4',
        firstName: "Daniela",
        lastName: 'Romero',
        age: "32",
        location: "EEUU"
    }, function (err, data) {
        console.log('Error:', err);
        console.log('Data:', data);
        callback(err, data);
    });
};

//Lectura de un documento
var readDocument = function (callback) {
    console.log("Reading document");
    db.get('doc_4', function (err, data) {
        console.log('Error:', err);
        console.log('Data:', data);
        // conservar una copia del documento para que conozca su señal de revisión
        doc = data;
        callback(err, data);
    });
};

//Actualización de un documento
var updateDocument = function (callback) {
    console.log("Updating document 'doc_4'");
    // realizar un cambio en el documento utilizando la copia que se ha conservado al leerlo de nuevo
    doc.firstName = 'Alex'
    db.insert(doc, function (err, data) {
        console.log('Error:', err);
        console.log('Data:', data);
        // conservar la revisión de la actualización para que podamos suprimirla
        doc._rev = data.rev;
        callback(err, data);
    });
};

//Supresión de un documento
var deleteDocument = function (doc, callback) {
    console.log("Deleting document 'doc_4'");
    // proporcionar el ID y revisión que se debe suprimir
    db.destroy(doc._id, doc._rev, function (err, data) {
        console.log('Error:', err);
        console.log('Data:', data);
        callback(err, data);
    });
};

async function execute() {
    try {
        //await createDatabase();
    await createDocument((err, data) => console.log("Documento creado"));

    await readDocument((err, data) => console.log("Documento leído"));

    await updateDocument((err, data)=> console.log("Documento actualizado"));
    //deleteDocument(resUpdateDoc);
    } catch (error) {
        console.log(error);
    }    
}

execute();