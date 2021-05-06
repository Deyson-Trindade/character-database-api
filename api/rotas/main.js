const roteador = require('express').Router()
const Dominio = require('../modelos/dominio')
const Personagem = require('../modelos/personagem')





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

roteador.get('/dominios/read', async (req, res) => {
    const p = new Personagem()
    p.select().then(e => res.send(e))
})

 roteador.post('/dominios', async (req, res, next) => {
    try{
        const personagem = new Personagem()
        const { nome, race, gender, classe } = req.body
        personagem.insert({
            nome,
            race,
            gender,
            classe
        })
        res.send({message: 'Deu tudo certo!'})

    } catch (erro) {
        next(erro)    

    }
    
})


module.exports = roteador
