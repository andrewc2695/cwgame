(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// const tile = {
//     pos: undefined,
//     piece: "none",
//     candyCane:,
//     circle:  
// }

const Tile = require("./tile")

// this.pos = info.pos;
// this.piece = null;
// this.safe = info.safe;
// this.candycane = info.candycane;

class Board {
    constructor(){
        this.board = [
            [new Tile({ row: 0, col: 0, piece: null, safe: false, candycane: false, connects: ['0, 1','1, 0']}),
                new Tile({ row: 0, col: 1, piece: null, safe: false, candycane: false, connects: ['0, 0', '0, 2', '1, 1']}),
                new Tile({ row: 0, col: 2, piece: null, safe: false, candycane: false, connects: ['0, 1', '0, 3', '1, 2']}),
                new Tile({ row: 0, col: 3, piece: null, safe: false, candycane: false, connects: ['0, 2', '0, 4', '1, 3']}),
                new Tile({ row: 0, col: 4, piece: null, safe: false, candycane: false, connects: ['0, 3', '1, 4']})
            ],
            [new Tile ({row: 1, col: 0, piece: null, safe: false, candycane: true, connects: ['1, 1', '0, 0', '2, 0', '2, 1']}),
                new Tile({ row: 1, col: 1, piece: null, safe: false, candycane: true, connects: ['1, 0', '1, 2', '0, 1', '2, 1']}),
                new Tile({ row: 1, col: 2, piece: null, safe: false, candycane: true, connects: ['1, 1', '1, 3', '0, 2', '2, 2', '2, 1', '2, 3']}),
                new Tile({ row: 1, col: 3, piece: null, safe: false, candycane: true, connects: ['1, 2', '1, 4', '0, 3', '2, 3'] }),
                new Tile({ row: 1, col: 4, piece: null, safe: false, candycane: true, connects: ['1, 3', '0, 4', '2, 4', '2, 3']})
            ],
            [new Tile({ row: 2, col: 0, piece: null, safe: false, candycane: true, connects: ['2, 1', '1, 0', '3, 0']}),
                new Tile({ row: 2, col: 1, piece: null, safe: true, candycane: false, connects: ['2, 0', '2, 2', '1, 1', '3, 1', '1, 0', '1, 2', '3, 0', '3, 2']}),
                new Tile({ row: 2, col: 2, piece: null, safe: false, candycane: false, connects: ['2, 1', '2, 3', '1, 2', '3, 2'] }),
                new Tile({ row: 2, col: 3, piece: null, safe: true, candycane: false, connects: ['2, 2', '2, 4', '1, 3', '3, 3', '1, 2', '1, 4', '3, 2', '3, 4'] }),
                new Tile({ row: 2, col: 4, piece: null, safe: false, candycane: true, connects: ['2, 3', '1, 4', '3, 4'] }),
            ],
            [new Tile({ row: 3, col: 0, piece: null, safe: false, candycane: true, connects: ['3, 1', '2, 0', '4, 0', '2, 1', '4, 1']}),
                new Tile({ row: 3, col: 1, piece: null, safe: false, candycane: false, connects: ['3, 0', '3, 2', '2, 1', '4, 1'] }),
                new Tile({ row: 3, col: 2, piece: null, safe: true, candycane: false, connects: ['3, 1', '3, 3', '2, 2', '4, 2', '2, 1', '2, 3', '4, 1', '4, 3']}),
                new Tile({ row: 3, col: 3, piece: null, safe: false, candycane: false, connects: ['3, 2', '3, 4', '2, 3', '4, 3'] }),
                new Tile({ row: 3, col: 4, piece: null, safe: false, candycane: true, connects: ['3, 3', '2, 4', '4, 4', '2, 3', '4, 3']}),
            ],
            [new Tile({ row: 4, col: 0, piece: null, safe: false, candycane: true, connects: ['4, 1', '3, 0', '5, 0'] }),
                new Tile({ row: 4, col: 1, piece: null, safe: true, candycane: false, connects: ['4, 0', '4, 2', '3, 1', '5, 1', '3, 0', '3, 2', '5, 0', '5, 2'] }),
                new Tile({ row: 4, col: 2, piece: null, safe: false, candycane: false, connects: ['4, 1', '4, 3', '3, 2', '5, 2']}),
                new Tile({ row: 4, col: 3, piece: null, safe: true, candycane: false, connects: ['4, 2', '4, 4', '3, 3', '5, 3', '3, 2', '3, 4', '5, 2', '5, 4'] }),
                new Tile({ row: 4, col: 4, piece: null, safe: false, candycane: true, connects: ['4, 3', '3, 4', '5, 4'] }),
            ],
            [new Tile({ row: 5, col: 0, piece: null, safe: false, candycane: true, connects: ['5, 1', '4, 0', '6, 0', '4, 1'] }),
                new Tile({ row: 5, col: 1, piece: null, safe: false, candycane: true, connects: ['5, 0', '5, 2', '4, 1'] }),
                new Tile({ row: 5, col: 2, piece: null, safe: false, candycane: true, connects: ['5, 1', '5, 3', '4, 2', '6, 2', '4, 1', '4, 3']}),
                new Tile({ row: 5, col: 3, piece: null, safe: false, candycane: true, connects: ['5, 2', '5, 4', '4, 3'] }),
                new Tile({ row: 5, col: 4, piece: null, safe: false, candycane: true, connects: ['5, 3', '4, 4', '6, 4', '4, 3']})
            ],
            [new Tile({row: 6, col: 0, piece: null, safe: false, candycane: true, connects: ['6, 2', '5, 0', '7, 0']}),
                null,
                new Tile({row: 6, col: 2, piece: null, safe: false, candycane: true, connects: ['6, 0', '6, 4', '5, 2', '7, 2']}),
                null,
                new Tile({row: 6, col: 4, piece: null, safe: false, candycane: true, connects: ['6, 2', '5, 4', '7, 4']})
            ],
            [new Tile({ row: 7, col: 0, piece: null, safe: false, candycane: true, connects: ['7, 2', '6, 0', '8, 0'] }),
                null,
                new Tile({ row: 7, col: 2, piece: null, safe: false, candycane: true, connects: ['7, 0', '7, 4', '6, 2', '8, 2'] }),
                null,
                new Tile({ row: 7, col: 4, piece: null, safe: false, candycane: true, connects: ['7, 2', '6, 4', '8, 4'] })
            ],
            [new Tile({ row: 8, col: 0, piece: null, safe: false, candycane: true, connects: ['8, 2', '7, 0', '9, 0'] }),
                null,
                new Tile({ row: 8, col: 2, piece: null, safe: false, candycane: true, connects: ['8, 0', '8, 4', '7, 2', '9, 2'] }),
                null,
                new Tile({ row: 8, col: 4, piece: null, safe: false, candycane: true, connects: ['8, 2', '7, 4', '9, 4'] })
            ],
            [new Tile({ row: 9, col: 0, piece: null, safe: false, candycane: true, connects: ['9, 1', '10, 0', '8, 0', '10, 1'] }),
                new Tile({ row: 9, col: 1, piece: null, safe: false, candycane: true, connects: ['9, 0', '9, 2', '10, 1'] }),
                new Tile({ row: 9, col: 2, piece: null, safe: false, candycane: true, connects: ['9, 1', '9, 3', '8, 2', '10, 2', '10, 1', '10, 3'] }),
                new Tile({ row: 9, col: 3, piece: null, safe: false, candycane: true, connects: ['9, 2', '9, 4', '10, 3'] }),
                new Tile({ row: 9, col: 4, piece: null, safe: false, candycane: true, connects: ['9, 3', '8, 4', '10, 4', '10, 3'] })
            ],
            [new Tile({ row: 10, col: 0, piece: null, safe: false, candycane: true, connects: ['10, 1', '9, 0', '11, 0'] }),
                new Tile({ row: 10, col: 1, piece: null, safe: true, candycane: false, connects: ['10, 0', '10, 2', '9, 1', '11, 1', '9, 0', '9, 2', '11, 0', '11, 2'] }),
                new Tile({ row: 10, col: 2, piece: null, safe: false, candycane: false, connects: ['10, 1', '10, 3', '9, 2', '11, 2'] }),
                new Tile({ row: 10, col: 3, piece: null, safe: true, candycane: false, connects: ['10, 2', '10, 4', '9, 3', '11, 3', '9, 2', '9, 4', '11, 2', '11, 4'] }),
                new Tile({ row: 2, col: 4, piece: null, safe: false, candycane: true, connects: ['10, 3', '9, 4', '11, 4'] }),
            ],
            [new Tile({ row: 11, col: 0, piece: null, safe: false, candycane: true, connects: ['11, 1', '10, 0', '12, 0', '10, 1', '12, 1'] }),
                new Tile({ row: 11, col: 1, piece: null, safe: false, candycane: false, connects: ['11, 0', '11, 2', '10, 1', '12, 1'] }),
                new Tile({ row: 11, col: 2, piece: null, safe: true, candycane: false, connects: ['11, 1', '11, 3', '10, 2', '12, 2', '10, 1', '10, 3', '12, 1', '12, 3'] }),
                new Tile({ row: 11, col: 3, piece: null, safe: false, candycane: false, connects: ['11, 2', '11, 4', '10, 3', '12, 3'] }),
                new Tile({ row: 11, col: 4, piece: null, safe: false, candycane: true, connects: ['11, 3', '10, 4', '12, 4', '10, 3', '12, 3'] }),
            ],
            [new Tile({ row: 12, col: 0, piece: null, safe: false, candycane: true, connects: ['12, 1', '11, 0', '13, 0'] }),
                new Tile({ row: 12, col: 1, piece: null, safe: true, candycane: false, connects: ['12, 0', '12, 2', '11, 1', '13, 1', '11, 0', '11, 2', '13, 0', '13, 2'] }),
                new Tile({ row: 12, col: 2, piece: null, safe: false, candycane: false, connects: ['12, 1', '12, 3', '11, 2', '13, 2'] }),
                new Tile({ row: 12, col: 3, piece: null, safe: true, candycane: false, connects: ['12, 2', '12, 4', '11, 3', '13, 3', '11, 2', '11, 4', '13, 2', '13, 4'] }),
                new Tile({ row: 12, col: 4, piece: null, safe: false, candycane: true, connects: ['12, 3', '11, 4', '13, 4'] }),
            ],
            [new Tile({ row: 13, col: 0, piece: null, safe: false, candycane: true, connects: ['13, 1', '12, 0', '14, 0', '12, 1'] }),
                new Tile({ row: 13, col: 1, piece: null, safe: false, candycane: false, connects: ['13, 0', '13, 2', '12, 1', '14, 1'] }),
                new Tile({ row: 13, col: 2, piece: null, safe: false, candycane: false, connects: ['13, 1', '13, 3', '12, 2', '12, 1', '12, 3', '14, 2'] }),
                new Tile({ row: 13, col: 3, piece: null, safe: false, candycane: false, connects: ['13, 2', '13, 4', '12, 3', '14, 3']}),
                new Tile({ row: 13, col: 4, piece: null, safe: false, candycane: true, connects: ['13, 3', '12, 4', '14, 4', '12, 3']})
            ], 
            [new Tile({ row: 14, col: 0, piece: null, safe: false, candycane: false, connects: ['14, 1', '13, 0'] }),
                new Tile({ row: 14, col: 1, piece: null, safe: false, candycane: false, connects: ['14, 0', '14, 2', '13, 1'] }),
                new Tile({ row: 14, col: 2, piece: null, safe: false, candycane: false, connects: ['14, 1', '14, 3', '13, 2'] }),
                new Tile({ row: 14, col: 3, piece: null, safe: false, candycane: false, connects: ['14, 2', '14, 4', '13, 3'] }),
                new Tile({ row: 14, col: 4, piece: null, safe: false, candycane: false, connects: ['14, 3', '13, 4'] })
            ], 
        ];
        this.pieces = {
            "flag": 1,
            "mine": 3,
            "bomb": 2,
            "engineer": 3,
            "1": 3,
            "2": 3,
            "3": 2,
            "4": 2,
            "5": 2,
            "6": 2,
            "7": 1,
            "8": 1
        };
    }

    placePiece = (e) => {
        let remainingPieces = Object.keys(this.pieces)
        let pieceList = document.createElement("ul");
        pieceList.setAttribute('id', 'piece-list');
        remainingPieces.forEach(piece => {
            let li = document.createElement("li");
            li.innerHTML = piece;
            pieceList.appendChild(li);
        });
        e.currentTarget.appendChild(pieceList);
    }

    setUpBoard = (player) => {
        let myTiles = document.getElementsByClassName(player);

        for(let i = 0; i < myTiles.length; i++){
            myTiles[i].addEventListener("click", (e) => this.placePiece(e))
        }
    }


    getValidMoves = (start) => {
        let startTile = this.board[start[0]][start[1]];
        let moves = [];
        moves = moves.concat(startTile.connects);
        if(startTile.candycane === true){
            let i = 0;
            while(i < moves.length){
                let posArray = moves[i].split(",")
                let posMoves = this.board[parseInt(posArray[0])][parseInt(posArray[1])].connects
                posMoves.forEach(posMove => {
                    let moveArr = posMove.split(",");
                    let newTile = this.board[parseInt(moveArr[0])][parseInt(moveArr[1])];
                    if(newTile.candycane){
                        if (newTile.row === startTile.row || newTile.col === startTile.col){
                            if(!moves.includes(posMove)){
                                moves.push(posMove)
                            }
                        }
                    }
                });
                i++;
            }
        }
        return moves;
    }
}

module.exports = Board;
},{"./tile":3}],2:[function(require,module,exports){
const Board = require('./board.js');
let socket = io();
let player;
socket.on('player', msg => {
    player = msg
    let highlightedTiles = [];
    console.log(player)
    const gameBoard = new Board();
    gameBoard.setUpBoard(`p${player}`);
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

},{"./board.js":1}],3:[function(require,module,exports){
class Tile {
    constructor(info){
        this.row = info.row;
        this.col = info.col;
        this.piece = null;
        this.safe = info.safe;
        this.candycane = info.candycane;
        this.connects = info.connects;
    }
}

module.exports = Tile;
},{}]},{},[2]);
