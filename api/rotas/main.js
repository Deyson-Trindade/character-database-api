const roteador = require('express').Router()
const Dominio = require('../modelos/dominio')

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






/*
roteador.get('/dominio/:nomeDominio', (req, res) => {

    const nomeDominio = req.params.nomeDominio

    const dominio = dominios[nomeDominio]
    if(!dominio) {
        res.status(404).send('Domínio não encontrado')
        return
    }
        res.send(dominio)


}) */

module.exports = roteador