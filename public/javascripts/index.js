$(document).ready(() => {
    $('#loginBtn').click(() => {
        const name = $('#name').val();

        if (!name) {

        } else {
            const clientSocket = io();

            clientSocket.emit('login', {name});









            clientSocket.on('newUser', data => {
                console.log('new user --->', data);
            });        
        };
    });
})