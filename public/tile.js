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