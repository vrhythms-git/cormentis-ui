//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
let port = 8080;
app.use(express.static(__dirname + '/dist/cormentis'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+"/dist/cormentis/index.html"));
});

// Start the app by listening on the default Heroku port

app.listen(process.env.PORT || port,
    ()=>{
        console.log(`express server started at port : ${port}`)
});