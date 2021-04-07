const dataBaseConection = require('../banco-de-dados/conexao')

module.exports = class Dominio {

    genero() {
        return new Promise((resolve, reject) => {
            dataBaseConection.query('SELECT * FROM genero', (erro, resultado) => {
                if(erro) reject(erro);
                resolve(resultado)
            })

        } )
    }
    raca() {
        return new Promise((resolve, reject) => {
            dataBaseConection.query('SELECT * FROM raca', (erro, resultado) => {
                if(erro) reject(erro);
                resolve(resultado)
            })

        } )
    }
    classe() {
        return new Promise((resolve, reject) => {
            dataBaseConection.query('SELECT * FROM classe', (erro, resultado) => {
                if(erro) reject(erro);
                resolve(resultado)
            })

        } )
    }
}
