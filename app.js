let express = require('express');
let app = express();
app.use(express.static('public'));
let http = require('http').Server(app);
let port = process.env.PORT || 3000;

let io = require('socket.io')(http);

io.on('connection', function(socket) {
    console.log('new connection');

    socket.on('message', function(msg) {
        console.log('got message from client: ' + msg);
    });
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
});

http.listen(port, function(){
    console.log('listening on *: ' + port);
});

