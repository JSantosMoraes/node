const http = require('http');

http.createServer((requisicao, resposta) => {
  resposta.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  resposta.write('CFB Cursos\nCurso de Node.js');
  resposta.end();

}).listen(1337);

/*
const http = require('http') // Requisitar o módulo http

http.createServer((requisicao,resposta)=>{ // A ordem é sempre essa, mas o nome pode mudar
    resposta.writeHead(200,{'Content-Type:':'text/plain'}) // Caso estiver tudo ok:
    resposta.write('CFB Cursos\n') // Escrevendo
    resposta.end() // Final
}).listen(1337) // Porta
*/