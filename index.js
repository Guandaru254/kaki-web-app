const admin = require('firebase-admin');
const serviceAccount = require('./kaki-cleaning-firebase-adminsdk-8h9l9-c3645e9440');

console.log('Initializing Firebase Admin SDK...');

try
 {
admin.initializeApp({
            credential : admin.
            credential.cert(serviceAccount),
            databaseURL : 'https://console.firebase.google.com/u/0/project/kaki-cleaning/database'
});

console.log('Firebase Admin SDK initialized successfully');
 }
catch
 (error) {
console.error('Error initializing Firebase Admin SDK:', error);
}