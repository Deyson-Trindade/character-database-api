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

roteador.get('/dominios/personagem', (req, res) => {
    personagem.listAll().then(e => res.send(e))
})

roteador.get('/personagem/:id', (req, res) => {
     
    personagem.get(req.params.id).then(data => res.send(data.shift()))
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

roteador.delete('/dominios/personagem/:id', (req, res, next) => {
    const parametros = req.params.id
    personagem.delete(parametros).then( () => res.send({message: 'res.send aqui'})).catch(erro => next(erro))
    //res.send({message: 'res.send aqui'})
})

roteador.put('/personagem/:id', (req, res) => {
    const { id } = req.params
    const { nome, generoID, classeID, racaID } = req.body
    console.log(id, nome, generoID, classeID, racaID)

    personagem.update({ nome, classe: Number(classeID), raca: Number(racaID), generoID, id: Number(id) }).then( () => res.send({ message: 'dados alterados com sucesso.' }))
})

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
