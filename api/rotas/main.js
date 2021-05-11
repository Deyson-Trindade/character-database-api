const roteador = require('express').Router()
const Dominio = require('../modelos/dominio')
const Personagem = require('../modelos/personagem')
const Usuario = require('../modelos/usuario')


const personagem = new Personagem()


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

roteador.get('/dominios/personagem', async (req, res) => {
    personagem.selecionaPersonagens().then(e => res.send(e))
})

roteador.post('/dominios', (req, res, next) => {
    try {
        const { nome, race, gender, classe } = req.body
        personagem.insertPersonagem({
            nome,
            race,
            gender,
            classe
        })
            .then(() => res.send({ message: 'Deu tudo certo!' })).catch(erro => next(erro))

    } catch (erro) {
        next(erro)

    }

})

roteador.delete('dominios/personagem/:ID', async (req, res, next) => {
    parametros = req.params
    personagem.delete(parametros).then(res => console.log(res))

})

//roteador.put('dominios/personagem')

roteador.post('/usuario', async (req, res, next) => {
    try {
        const usuario = new Usuario()
        const { user, email, senha } = req.body
        console.log(req.body)
        usuario.insereUsuario({
            user,
            email,
            senha
        })
            .then(() => res.send({ message: 'né que funcionou?' })).catch(erro => next(erro))

    } catch (erro) {
        next(erro)
    }
})


module.exports = roteador
