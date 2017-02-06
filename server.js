var http = require('http'),
    path = require('path'),
    express = require('express'),
    app = express();
    port = process.env.NODE_ENV | 3000;

app.use(express.static(path.join(__dirname, '')));
http.createServer(app).listen(port);

console.log('server started on port: %s', port);