const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
admin.initializeApp();
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/userVotes/', function(solicitud, res){
    var uid = solicitud.body.uid;
    var totalVotes = 0;
    admin.firestore().collection('people').get().then((respuestaDB) => {
        
        respuestaDB.forEach((temp) => {
            admin.firestore().collection('people/' + temp.id + '/votes').get().then((respuestaVT) =>{
                respuestaVT.forEach((tempV) => {
                    if(tempV.data().user == uid){
                        totalVotes ++;
                    }
                });
                console.log(totalVotes);
                var respuesta =  {
                    "user":uid,
                    "totalVotes":totalVotes
                } 
                res.status(200).send(respuesta);
            });
        });
        
    });
});


exports.app = functions.https.onRequest(app);