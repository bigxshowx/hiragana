const express = require('express');
const app = express();

//Start Server
app.listen(8080, function() {
  console.log('listening on IDE 8080'); //https://ide50-tony-rr.cs50.io:8080/
});

//Serves Root HTML file
app.get('/', function(req, res){
    res.sendFile('/home/ubuntu/workspace/hiragana'+'/hiragana.html');
});


app.get('/hiragana.js', function(req, res){
    res.sendFile('/home/ubuntu/workspace/hiragana'+'/hiragana.js');
});