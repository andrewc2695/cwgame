// const Board = require('./board.js');
let socket = io();
let player;
socket.on('player', msg => {
    player = msg
})

