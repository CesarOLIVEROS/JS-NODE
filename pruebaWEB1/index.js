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

// documentacion para la creacion de nuevos usuarios
db.collection("users").add({
    first: "Jhon",
    last: "Joya",
    born: 2000
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});