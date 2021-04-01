const Board = require('./board.js');
let socket = io();
let player;
socket.on('player', msg => {
    player = msg
})

let highlightedTiles = [];

const gameBoard = new Board();
const squares = document.getElementsByClassName("square");

const circles = document.getElementsByClassName("circle")

for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", () => handleClick(squares[i].id))
}
for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener("click", () => handleClick(circles[i].id))
}

// function handleClick(clickId){
//     moves = gameBoard.getValidMoves(clickId.split(" "));
//     moves.forEach(move => {
//         highlightedTiles.push(move)
//         move = move.split(",").join("");
//         console.log(move);
//         validMove = document.getElementById(String(move));
//         validMove.style.boxShadow = "0px 0px 10px 5px yellow";
//     })
    
// }
