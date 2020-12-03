
const express = require('express');
const path = require('path');

const firebaseUtils = require(__dirname + '/node/firebaseInit.js');
const firebase = require('firebase');
const cors = require('cors')

const app = express();

let port = 8081;
app.use(express.static(__dirname +'/dist/cormentis'));

app.get('/', function(req,res) {
    
res.sendFile(path.join(__dirname+"/dist/cormentis/index.html"));
});


app.listen(process.env.PORT || port,
    ()=>{
        console.log(`express server started at port : ${port}`)
});

try{
    firebase.initializeApp(firebaseUtils.getFirebaseConfig())
    console.log('firebase successfully initilized.');
}catch(error){
    console.log(`Error while initilizing firebase as : ${error}`);
}

var corsOptions = {
    "origin": '*',
	"Access-Control-Allow-Origin": '*',
}
app.use(express.json());
app.use('*',cors())

app.get('/api/test', cors(corsOptions), (req, res) => {
    res.json({
        'message': 'It worked!' 
    });
    res.end();
});

app.post('/api/signin', cors(corsOptions), (req, res) => {
    console.log('Recived new request with payload : ' + JSON.stringify(req.body))
    resp = {};
    /*let parse = parser(schemaValidations.getSignUpJsonSchema()); 
        if(parse(parse) == false){
            resp.status = 'success'
            resp.errorCode = 101;
            resp.errorMsg = 'Please provide valid JSON.' 
        }*/

    firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password).then((data) => {
        firebase.auth().currentUser.getIdToken(false).then((idToken) => {
        
            res.json({
                status:  'success',
                userID:   data.user.uid,
                token :   idToken
            })
            res.end();

            // fireAdmin.auth().verifyIdToken(idToken, false).then((data) => {
            //     console.log('token verificatrion result  : ' + JSON.stringify(data))
            // })

        }).catch((error) => {
            console.log('Opps! caught an error while getting a token as : ' + error)
            res.json({
                status:         'fail',
                errorCode:      error.code,
                errorMessage :  error.message
            })
            res.end();
        });
    }).catch(function (error) {
        console.log('Opps! caught an error while signing in the user as : ' + error)
        res.json({
            status:         'fail',
            errorCode:      error.code,
            errorMessage :  error.message
        })
        res.end();
    });
});

const firebaseAdminUtils = require(__dirname+'/node/firebaseAdminUtils')
app.post('/api/signup',  cors(corsOptions), (req, res) => {

    firebaseAdminUtils.signUpUser(req.body).then((userRecord) => {

        console.log(`New user created successfully as ${JSON.stringify(userRecord)}`)
            res.json({
                status: 'success',
            })
        })
        .catch((error) => {
            console.log(`Opps! caught an error while creating new user as : ${error}`)
            res.json({
                status:         'fail',
                errorCode:      error.code,
                errorMessage :  error.message
            })
        });

});
