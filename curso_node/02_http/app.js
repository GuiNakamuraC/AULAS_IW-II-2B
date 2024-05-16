// SELECIONAR O MÓDULO http DO NODE
var http = require('http')

// ABRIR UM SERVIDOR http
http.createServer(function(req,res){
    res.end('OI 2C BEM-VINDOS AO SERVIDOR NODE JS')
}).listen(8081)
console.log("Servidor rodando ....")