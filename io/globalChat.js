const serverIo = require('socket.io')();


serverIo.on('connection', serverSocket => {
    console.log('New user connected');

    serverSocket.on('login', data => {
        console.log('login ---> ', data);


        serverIo.emit('newUser', data)
    });
});



module.exports = serverIo;