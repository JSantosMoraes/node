const http = require('http');
const porta = process.env.PORT; // Ver depois

const servidor = http.createServer((req, res) => {
    res.statusCode = 200; // OK
    res.writeHead(200, {'Content-Type': 'text/plain'}); // Correção aqui
    res.end('CFB Cursos');
});

servidor.listen(porta || 3000, () => {
    console.log('Servidor Rodando');
});

// Ao executar coloque localhost:3000 no navegador
