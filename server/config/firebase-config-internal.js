// Import the functions you need from the SDKs you need

var admin = require('firebase-admin');

var serviceAccount = require('./dsohjh-firebase-adminsdk-pzo76-be5faddfb1.json');

var db = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

module.exports = db;