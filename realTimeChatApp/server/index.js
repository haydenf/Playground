const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 5000;

io.on('connection', (socket) => {
    console.log(' --- New connection --- ');
        socket.on('disconnect', () => {
            console.log(' --- User disconnection --- ')
        })
});

app.use(router);

server.listen(PORT, () => console.log(`Server has start on port ${PORT}`));

