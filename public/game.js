const pieces = {
    flag: 1,
    mine: 3,
    bomb: 2,
    eng: 3,
    1: 3,
    2: 3,
    3: 2,
    4: 2,
    5: 2,
    6: 2,
    7: 1,
    8: 1
};

document.addEventListener("DOMContentLoaded", () => {
    console.log("hi");
})

let socket = io();

window.onclick = function(e) {
    socket.emit('message', 'chinese war game')
}

