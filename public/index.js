let socket = io();
let player;
socket.on('player', msg => {
    player = msg
})

window.onclick = function(e) {
    socket.emit('message', `${player} clicked!`);
}