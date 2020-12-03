const fireAdmin = require('firebase-admin');
const firebaseUtils = require('./firebaseInit');

fireAdmin.initializeApp({
    credential: fireAdmin.credential.cert(firebaseUtils.getFireBaseAdminConfig()),
    databaseURL: "https://vr-cormentis-project.firebaseio.com"
});

function signUpUser(payloadJson) {

   return fireAdmin.auth().createUser({
        email: payloadJson.email,
        emailVerified: false,
        phoneNumber: payloadJson.phoneNumber,
        password: payloadJson.password,
        displayName: payloadJson.displayName,
        photoURL: payloadJson.photoURL,
        disabled: false
    })
}


module.exports = {signUpUser}