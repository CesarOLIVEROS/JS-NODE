// Codigo de la documentacion para acceder a cloud firestore
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

// aca despues de require se agrega el json que genera firestore 
// que lo buscamos en el proyecto, luego el SDK y luego se genera la clave.
const serviceAccount = require('./pruebaweb1-c24e7-dc2f0a1642a7.json');
// inicializamos la firestore
initializeApp({
  credential: cert(serviceAccount)
});
// creamos la constante de la db obteniendo la firestore
const db = getFirestore();

// documentacion para la creacion documentos sobreescribiendo los datos si ya 
// extiste y pasando el ID
/*db.collection("users").doc("1").set({
    Nombre: 'Carolina',
    ID: 342,
    Ciudad: 'Piedecuesta'
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});*/


// Como agregar un doc a firestore pero no tiene en cuenta si se repiten los datos del documento
// el metodo add si puede devolver el documento con los valores que se dejen en la DB
// se pasaria el docRef para usar con el id e imprimirlo en un console.log.
/*db.collection('users').add({
    Nombre: 'Arantza',
    ID: 87,
    Ubicacion:"Trabajo"
})
.then((docRef)=>{
    console.log('Document written with ID: ', docRef.id);
})
.catch((error) => {
    console.log("Error adding document: ", error);
});*/

// como actualizar un documento de firestor

/*db.collection("users").doc("yR7dP8kCgQtBHA5IiMII").update({
    Nombre:"GErman Montero",
    ID: 4563256
})
.then(()=>{
    console.log("Documento actualizado");
})
.catch((error)=>{
    console.log("Error al actualizar el documento:", error);
});*/

// Borrar un documento de firestore

/*db.collection("users").doc("1").delete()
.then(() => {
    console.log("Document successfully deleted!");
}).catch((error) => {
    console.error("Error removing document: ", error);
});*/

// Leer un documento de firestore 
// se obtiene la referencia de el doc y la collection de la db
/*var docRef = db.collection("users").doc("yR7dP8kCgQtBHA5IiMII");
// Obtenemos los datos 
docRef.get()
    // ejecutamos la promesa y verificamos su existencia para adelantar el proceso
    .then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});*/


// OBTENER TODOS LOS DOCUMENTOS DE UNA COLECCION Y SI SE DESEA FILTRAR ALGUN DATO ESPECIFICO
// .where("capital", "==", true) usando esta linea se puede especificar la consulta por algun concepto especifico.
/*db.collection("users")
    .get()
    // trae un document array de nombre cualquiera y luego lo recorre el mismo 
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // en la siguiente linea imprime el id del documento y la data del mismo documento
            console.log(doc.id, " => ", doc.data());
            // uso de los datos de doc.data, deben guardarse en un objeto de tipo JSON.
            var object = doc.data();
             // luego se deberia imprimir asi o hacer cualquier operación.
            console.log(object);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });*/

// CONSULTAR DOCUMENTO QUE TENGAN CASA POR UBICACION EN FIRESTORE O ALGO ESPECIFICO.
/*db.collection("users").where("Ubicacion", "==", "Casa")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });*/

// Consulta de documento donde no solo cumpla con una condición si no con varias

db.collection("users").where("Ubicacion", "==", "Casa").where("ID", "==", 873765089)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
