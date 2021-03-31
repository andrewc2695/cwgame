class Tile {
    constructor(info){
        this.pos = info.pos;
        this.piece = null;
        this.safe = info.safe;
        this.candycane = info.candycane;
    }
}

export default Tile;