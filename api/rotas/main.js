const roteador = require('express').Router()
const Dominio = require('../modelos/dominio')
const Personagem = require('../modelos/personagem')

const dataBaseConection = require('../banco-de-dados/conexao')



const processaDominios = dominio => ({
    chave: dominio.ID,
    descricao: dominio.Nome
})

roteador.get('/dominios', async (req, res, next) => {
    try {
        const dominio = new Dominio()
        const classes = await dominio.classe().then(resultado => resultado.map(processaDominios))
        const racas = await dominio.raca().then(resultado => resultado.map(processaDominios))
        const generos = await dominio.genero().then(resultado => resultado.map(processaDominios))
        res.send({
            classes,
            racas,
            generos
        })
    } catch (erro) {
        console.log(erro)
        next(erro)

    }    
})

 roteador.post('/dominios/data', async (req, res, next) => {
    try{
        const personagem = new Personagem()
        const { nome, race, gender } = req.body
        personagem.insere({
            nome,
            race,
            gender

        })
        res.send({message: 'Deu tudo certo!'})

    } catch (erro) {
        next(erro)    

    }
    
})


module.exports = roteador
