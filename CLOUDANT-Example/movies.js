const Cloudant = require('@cloudant/cloudant');
const databaseName = 'movies-demo';

let getConnection = () => {
    return new Promise((resolve, reject) => {
        Cloudant({
            url: 'https://16eece4e-4e4d-41e8-901f-14db4cb2d2c4-bluemix.cloudantnosqldb.appdomain.cloud', plugins: {
                iamauth:
                    { iamApiKey: '0s_O_hGocSdcN_bVRUokJjJh8vO8HB5D0mp2q7jkSkIZ' }
            }
        }, (error, connection) => {
            if (connection) {
                resolve(connection);
            } else {
                reject(error);
            }
        });
    });
};

let fetchDataFromDB = (connection) => {
    return new Promise((resolve, reject) => {
        let objectArray = [];
        let dbName = connection.db.use(databaseName);
        dbName.view('data', 'get-old-movies', { 'include_docs': true }, (err, result) => {
            if (result) {
                result.rows.forEach(document => {
                    let dbDoc = document.doc;
                    dbDoc.old_movies = true;
                    objectArray.push(dbDoc);
                });
                resolve(objectArray);
            } else {
                reject(err);
            }
        });
    });
};

let updateData = (documentObject, connection) => {
    return new Promise((resolve, reject) => {
        let dbName = connection.db.use(databaseName);
        dbName.insert(documentObject, (err, document) => {
            if (err) {
                reject(err);
            } else {
                resolve("200");
            }
        });
    });
};

let updateBulkData = (documentObject, connection) => {
    return new Promise((resolve, reject) => {
        let dbName = connection.db.use(databaseName);
        dbName.bulk(documentObject, (err, document) => {
            if (err) {
                reject(err);
            } else {
                resolve("200");
            }
        });
    });
}

async function main() {
    let connection;
    let dataArray;
    let i = 0;
    const size = 500;

    try {
        connection = await getConnection();
        dataArray = await fetchDataFromDB(connection);
    } catch (error) {
        console.log(error);
    }

    while(dataArray[i]){
    //for (i in dataArray) {
        console.log("Iteración "+ i);
        try {
            let status = await updateBulkData({docs: dataArray.splice(0, size)}, connection);
            if (status != "200") {
                console.log(`Error: ${status}`);
                break;
            }
        } catch (error) {
            console.log(error);
        }
        i++;
    }
    console.log("Finalizado!");
}

main();