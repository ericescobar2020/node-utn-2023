const http = require('http');
const hostname = '127.0.0.1';
const port = 4000; // Cambiado a 4000, pero puedes usar cualquier otro número

const server = http.createServer((req, res) => { // primero va el req y el res
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡Hola mundo!');
});

server.listen(port, hostname, () => {
    console.log(`Iniciando servidor web en el puerto ${port}`);
});

// http://127.0.0.1:4000 para ejecutar este servidor 