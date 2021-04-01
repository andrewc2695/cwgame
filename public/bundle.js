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
                new Tile({ row: 0, col: 4, piece: null, safe: false, candycane: false, connects: ['0, 3', '1,4']})
            ],
            [new Tile ({row: 1, col: 0, piece: null, safe: false, candycane: true, connects: ['1, 1', '0, 0', '2, 0', '2, 1']}),
                new Tile({ row: 1, col: 1, piece: null, safe: false, candycane: true, connects: ['1, 0', '1, 2', '0, 1', '2, 1']}),
                new Tile({ row: 1, col: 2, piece: null, safe: false, candycane: true, connects: ['1, 1', '1, 3', '0, 2', '2, 2', '2, 1', '2, 3']}),
                new Tile({ row: 1, col: 3, piece: null, safe: false, candycane: true, connects: ['1, 2', '1, 4', '0, 3', '2, 3'] }),
                new Tile({ row: 1, col: 3, piece: null, safe: false, candycane: true, connects: ['1, 3', '0, 4', '2, 4', '2, 3']})
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
                new Tile({ row: 5, col: 2, piece: null, safe: false, candycane: true, connects: ['5, 1', '5, 3', '4, 2', '6, 1', '4, 1', '4, 3']}),
                new Tile({ row: 5, col: 3, piece: null, safe: false, candycane: true, connects: ['5, 2', '5, 4', '4, 3'] }),
                new Tile({ row: 5, col: 4, piece: null, safe: false, candycane: true, connects: ['5, 3', '4, 4', '6, 2', '4, 3']})
            ],
            [new Tile({row: 6, col: 0, piece: null, safe: false, candycane: true, connects: ['6, 1', '5, 0', '7, 0']}),
                new Tile({row: 6, col: 1, piece: null, safe: false, candycane: true, connects: ['6, 0', '6, 2', '5, 2', '7, 1']}),
                new Tile({row: 6, col: 2, piece: null, safe: false, candycane: true, connects: ['6, 1', '5, 4', '7, 2']})
            ],
            [new Tile({ row: 7, col: 0, piece: null, safe: false, candycane: true, connects: ['7, 1', '6, 0', '8, 0'] }),
                new Tile({ row: 7, col: 1, piece: null, safe: false, candycane: true, connects: ['7, 0', '7, 2', '6, 1', '8, 1'] }),
                new Tile({ row: 7, col: 2, piece: null, safe: false, candycane: true, connects: ['7, 1', '6, 2', '8, 2'] })
            ],
            [new Tile({ row: 8, col: 0, piece: null, safe: false, candycane: true, connects: ['8, 1', '7, 0', '9, 0'] }),
                new Tile({ row: 8, col: 1, piece: null, safe: false, candycane: true, connects: ['8, 0', '8, 2', '7, 1', '9, 2'] }),
                new Tile({ row: 7, col: 2, piece: null, safe: false, candycane: true, connects: ['8, 1', '6, 2', '9, 4'] })
            ],
            [new Tile({ row: 9, col: 0, piece: null, safe: false, candycane: true, connects: ['9, 1', '10, 0', '8, 0', '10, 1'] }),
                new Tile({ row: 9, col: 1, piece: null, safe: false, candycane: true, connects: ['9, 0', '9, 2', '10, 1'] }),
                new Tile({ row: 9, col: 2, piece: null, safe: false, candycane: true, connects: ['9, 1', '9, 3', '8, 1', '10, 2', '10, 1', '10, 3'] }),
                new Tile({ row: 9, col: 3, piece: null, safe: false, candycane: true, connects: ['9, 2', '9, 4', '10, 3'] }),
                new Tile({ row: 9, col: 4, piece: null, safe: false, candycane: true, connects: ['9, 3', '8, 2', '10, 2', '10, 3'] })
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
                new Tile({ row: 12, col: 2, piece: null, safe: false, candycane: false, connects: ['11, 1', '12, 3', '11, 2', '13, 2'] }),
                new Tile({ row: 12, col: 3, piece: null, safe: true, candycane: false, connects: ['12, 2', '12, 4', '11, 3', '13, 3', '11, 2', '11, 4', '13, 2', '13, 4'] }),
                new Tile({ row: 12, col: 4, piece: null, safe: false, candycane: true, connects: ['12, 3', '11, 4', '13, 4'] }),
            ],
            [new Tile({ row: 14, col: 0, piece: null, safe: false, candycane: false, connects: ['14, 1', '13, 0'] }),
                new Tile({ row: 14, col: 1, piece: null, safe: false, candycane: false, connects: ['14, 0', '14, 2', '13, 1'] }),
                new Tile({ row: 14, col: 2, piece: null, safe: false, candycane: false, connects: ['14, 1', '14, 3', '13, 2'] }),
                new Tile({ row: 14, col: 3, piece: null, safe: false, candycane: false, connects: ['14, 2', '14, 4', '13, 3'] }),
                new Tile({ row: 14, col: 4, piece: null, safe: false, candycane: false, connects: ['14, 3', '13,4'] })
            ], 
        ]
    }

    getValidMoves = (start) => {
        
    }
}

module.exports = Board;
},{"./tile":3}],2:[function(require,module,exports){
const Board = require('./board.js');
let socket = io();
let player;
socket.on('player', msg => {
    player = msg
})

window.onclick = function(e){
    console.log("hi");
}


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
