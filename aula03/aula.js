// CRIANDO ROTAS

const http = require('http')
const url = require('url')
const porta = 3000
const host = '127.0.0.1'

const servidor = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'text/html'}) // plain = textos simples, // html = formato html
    res.write(req.url) // escrevendo a requisição do url na tela
    const p = url.parse(req.url,true).query // Escreva nome=jonas&curso=node na url apos a host
    res.write('<br>'+p.nome)
    res.write('<br>'+p.curso)
    res.end()
})

servidor.listen(porta, host,()=>{console.log('Servidor rodando')})