// Import the functions you need from the SDKs you need

var admin = require('firebase-admin');

var serviceAccount = require('./dsohjh-firebase-adminsdk-pzo76-87cf03c617.json');

var db = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

module.exports = db;