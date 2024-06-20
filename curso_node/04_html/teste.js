const Sequelize = require('sequelize')
const sequelize = new Sequelize('test','root','',{
    host:'localhost',
    dialect:'mysql'
})

// sequelize.authenticate().then(function(){
//     console.log("Conectado com Sucesso!")
// }).catch(function(erro){
//     console.log("ERRO: " + erro)
// })

const Postagem = sequelize.define('postagem',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    }
})

// Postagem.sync(force=true)
// Usuario.sync(force=true)

// Postagem.create({
//     titulo: 'Primeira Postagem',
//     conteudo: 'Conteudo da primeira postagem'
// })