const dataBaseConection = require('../banco-de-dados/conexao')

module.exports = class Personagem {
    insertPersonagem(personagem) {
        return new Promise((resolve, reject) => {
            dataBaseConection.query({
                sql: 'INSERT INTO personagem (Nome, racaID, generoID, classeID) values(?, ?, ?, ? )',
                timeout: 40000, // 40s
                values: Object.values(personagem),
                callback: (erro, resultado) => {
                    if (erro) reject(erro)
                    resolve()
                }
            })

        })

    }

    selecionaPersonagens() {
        return new Promise((resolve, reject) => {
            dataBaseConection.query(
                `SELECT p.ID as ID, p.Nome as nome, c.Nome as classe, g.Nome as genero, r.Nome as raca 
                from personagem p
                join classe c on p.classeID = c.ID 
                join genero g on p.generoID = g.ID 
                join raca r on p.racaID = r.ID`, (erro, resultado) => {
                if (erro) reject(erro);
                resolve(resultado)
            })

        })
    }

    update() {
        return new Promise((resolve, reject) => {
            dataBaseConection.query(
              `UPDATE personagem SET Nome = ? and classeID = ? and  `  
            )
        })
    }

    delete(parametros) {
        return new Promise((resolve, reject) => {
            console.log('dps do await')
            dataBaseConection.query({
                sql:'DELETE from personagem WHERE ID=?;',
                values: Number(parametros),
            },  (erro, resultado) => {
                console.log(resultado, erro)
                if (erro) reject(erro)
                resolve(resultado)
            })
        })
    }


}
