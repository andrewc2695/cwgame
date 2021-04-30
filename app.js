let express = require('express');
let app = express();
app.use(express.static('public'));
let http = require('http').Server(app);
let port = process.env.PORT || 3000;

let io = require('socket.io')(http);

const players = [];
let playersReady = 0;

io.on('connection', function(socket) {
    console.log('new connection');
    players.push(players.length + 1);
    socket.emit('player', players.length);

    socket.on('message', function(msg) {
        console.log('got message from client: ' + msg);
    });

    socket.on('move', function(msg) {
        socket.broadcast.emit('move', msg);
    });

    socket.on('setup', (msg) => {
        socket.broadcast.emit('setup', msg)
        playersReady++;
        if(playersReady === 2){
            io.emit("bothReady")
        }
    })

    socket.on("switchTurns", (msg) => {
        socket.broadcast.emit('switchTurns', msg)
    })
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
});

http.listen(port, function(){
    console.log('listening on *: ' + port);
});

