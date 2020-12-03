const  firebaseConfig = {
                apiKey: "AIzaSyD4l_Pg0ia3r7XaO-PXH__q45OrgYDh6bE",
                authDomain: "vr-cormentis-project.firebaseapp.com",
                databaseURL: "https://vr-cormentis-project.firebaseio.com",
                projectId: "vr-cormentis-project",
                storageBucket: "vr-cormentis-project.appspot.com",
                messagingSenderId: "375538955820",
                appId: "1:375538955820:web:f8a31655b0f80a4e2c4389"
            };
            
const adminConfJSON = require('./vr-cormentis-project-firebase-adminsdk-op1qk-4f6d4b403f.json');

function getFireBaseAdminConfig(){
   return adminConfJSON;
}

 function getFirebaseConfig(){
    return firebaseConfig;
 }            

 module.exports = {getFirebaseConfig, getFireBaseAdminConfig}