const http = require('http')
const url = require('url')
const porta = 3000
const host = '127.0.0.1'

const servidor = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'}) // << HTML || text/plain << Texto Simples
    res.write(req.url) // Imprimindo a url requisitada
    const p = url.parse(req.url,true).query // QueryString >>> (Estudar Sobre) <<<
    res.write('</br>'+p.nome)
    res.write('</br>'+p.curso)
    res.end()
})

servidor.listen(porta,host,()=>{
    console.log('Servidor Rodando')
})

// Ao executar coloque http://localhost:3000/?nome=jonas&curso=Curso+de+Node no navegador