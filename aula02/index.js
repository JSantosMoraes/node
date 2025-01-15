const http = require('http')

http.createServer((request,response)=>{
    response.writeHead(200,{ // Escrevendo no cabeçalho do arquivo
        'Content-type':'text/plain'

    })
    response.write('Hello World, este e meu primeiro servidor node.js\nCFB Cursos 2025') // Escrevendo
    response.end() // Terminando
}).listen(1337) // Porta