const net = require('net');

// Create a TCP server
const server = net.createServer((socket) => {
    console.log('Client connected');

    socket.on('data', (data) => {
        console.log('Received:', data.toString());
        socket.write('Hello from server');
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

server.listen(8000, () => {
    console.log('Server listening on port 8000');
});

// Create a TCP client
const client = new net.Socket();

client.connect(8000, 'localhost', () => {
    console.log('Connected to server');
    client.write('Hello from client');
});

client.on('data', (data) => {
    console.log('Received from server:', data.toString());
    client.end();
});

client.on('close', () => {
    console.log('Connection closed');
});
