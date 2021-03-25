const http = require('http');
const socket = require('socket.io');
const express = require('express');


const hostname = '127.0.0.1';
const port = 3000;

var app = express();
const server = http.createServer(app)
const io = socket(server)


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {

    // just assign a random number to every player that has connected
    // the numbers have no significance so it
    // doesn't matter if 2 people get the same number
    var playerId = Math.floor((Math.random() * 100) + 1)
    console.log(playerId + ' connected');

    // if a user disconnects just print their playerID
    socket.on('disconnect', function () {
        console.log(playerId + ' disconnected');
    });
});
