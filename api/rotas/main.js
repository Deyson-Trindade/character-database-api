const roteador = require('express').Router()

const racas = [
    {
        chave: 1,
        descricao: 'Humano'
    },
    {
        chave: 2,
        descricao: 'Elfo'
    },
    {
        chave: 3,
        descricao: 'Anão'
    }
]

const classes = [
    {
        chave: 4,
        descricao: 'Guerreiro'
    },
    {
        chave: 5,
        descricao: 'Mago'
    },
    {
        chave: 6,
        descricao: 'Clérigo'
    }
]

const generos = [
    {
        chave: 7,
        descricao: 'Agenere'
    },
    {
        chave: 8,
        descricao: 'Masculino'
    },
    {
        chave: 9,
        descricao: 'Feminino'
    }
]

const dominios = {
    racas,
    classes,
    generos
}
roteador.get('/dominios', (req, res) => {
    res.send(dominios)
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