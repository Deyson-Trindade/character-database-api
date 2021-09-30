const dataBaseConection = require('../banco-de-dados/conexao')

module.exports = class Usuario {

    insereUsuario(usuario) {
        return new Promise ((resolve,reject) => {
            dataBaseConection.query({
                sql: 'INSERT INTO usuario (user, email, senha) values(?,?,?)',
                timeout: 4000,
                values: Object.values(usuario),
                callback: (erro, resultado) => {
                    if (erro) reject(erro)
                    resolve()
                }
            })

        })


    }

}