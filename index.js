import http from 'http'

// TODO


// Create a webserver
const app = http.createServer((res, req) => {});
const PORT = `3002`

// Create listen to requests
app.listen(PORT);

app.on('connection', (socket) => {
    console.log('app is connected');
})

// Loads server
require('./src/server');
