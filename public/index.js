const Board = require('./board.js');
let socket = io();
let player;
socket.on('player', msg => {
    player = msg
})



const squares = document.getElementsByClassName("square");
for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", () => handleClick(squares[i].id))
}

function handleClick(clickId){
    console.log(clickId.split(" "));
}
