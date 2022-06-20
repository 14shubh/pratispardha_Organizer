//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/organizer_frontend'));

app.get('/*', function(req, res) {
    //sessionStorage.removeItem('jwt_token');
    res.sendFile(path.join(__dirname + '/dist/organizer_frontend/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000,()=>{
    console.log("server is suning")
});