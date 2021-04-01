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
                new Tile({ row: 1, col: 3, piece: null, safe: false, candycane: true, connects: ['3, 3', '2, 4', '4, 4', '2, 3', '4, 3']}),
            ],
            [new Tile({ row: 4, col: 0, piece: null, safe: false, candycane: true, connects: ['4, 1', '3, 0', '5, 0'] }),
                new Tile({ row: 4, col: 1, piece: null, safe: true, candycane: false, connects: ['4, 0', '4, 2', '3, 1', '5, 1', '3, 0', '3, 2', '5, 0', '5, 2'] }),
                new Tile({ row: 4, col: 2, piece: null, safe: false, candycane: false, connects: ['4, 1', '4, 3', '3, 2', '3, 2']}),
                new Tile({ row: 2, col: 3, piece: null, safe: true, candycane: false, connects: ['2, 2', '2, 4', '1, 3', '3, 3', '1, 2', '1, 4', '3, 2', '3, 4'] }),
                new Tile({ row: 2, col: 4, piece: null, safe: false, candycane: true, connects: ['2, 3', '1, 4', '3, 4'] }),
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
                new Tile({ row: 10, col: 2, piece: null, safe: false, candycane: false, connects: ['4, 1', '4, 3', '3, 2', '3, 2'] }),
                new Tile({ row: 2, col: 3, piece: null, safe: true, candycane: false, connects: ['2, 2', '2, 4', '1, 3', '3, 3', '1, 2', '1, 4', '3, 2', '3, 4'] }),
                new Tile({ row: 2, col: 4, piece: null, safe: false, candycane: true, connects: ['2, 3', '1, 4', '3, 4'] }),
            ],
        ]
    }
}

module.exports = Board;