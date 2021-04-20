const Board = require('./board.js');
let socket = io();
let player;
const gameBoard = new Board();
console.log("can u see this?")
socket.on('player', msg => {
    player = msg
    console.log(player)
    gameBoard.setUpBoard(`p${msg}`);
})

let ready = gameBoard.ready;
let int = setInterval(() => {
    if(gameBoard.ready){
        socket.emit("setup", 
            gameBoard.posObj
        );
        clearInterval(int);
    }
}, 300)

socket.on("setup", (msg) => {
    gameBoard.placeOpponentsPieces(msg);
})


// const squares = document.getElementsByClassName("square");

// const circles = document.getElementsByClassName("circle")

// for(let i = 0; i < squares.length; i++){
//     squares[i].addEventListener("click", () => handleClick(squares[i].id))
// }
// for (let i = 0; i < circles.length; i++) {
//     circles[i].addEventListener("click", () => handleClick(circles[i].id))
// }
//have p2 ready vairable when it is true invoke start game function

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
