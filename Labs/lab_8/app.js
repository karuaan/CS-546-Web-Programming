//***
// Karan Shah
// I pledge my Honor that I have abided by the Stevens Honors System.
// CS 546 WS
//***

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + 'Data'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/Palindorme.html'));
});

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});