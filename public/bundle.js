(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// const tile = {
//     pos: undefined,
//     piece: "none",
//     candyCane:,
//     circle:  
// }

const Tile = require("./tile")

class Board {
    constructor(){
        this.board = [
            [new Tile()]
        ]
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


},{"./board.js":1}],3:[function(require,module,exports){
class Tile {
    constructor(info){
        this.pos = info.pos;
        this.piece = null;
        this.safe = info.safe;
        this.candycane = info.candycane;
    }
}

module.exports = Tile;
},{}]},{},[2]);
