let express = require('express');
let app = express();
app.use(express.static('public'));
let http = require('http').Server(app);
let port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
});

http.listen(port, function(){
    console.log('listening on *: ' + port);
});

