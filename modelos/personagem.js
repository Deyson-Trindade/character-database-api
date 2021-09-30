const dataBaseConection = require('../banco-de-dados/conexao')

module.exports = class Personagem {
    insertPersonagem(personagem) {
        return new Promise((resolve, reject) => {
            console.log(personagem)
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

    listAll() {
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

    get(id) {
        return new Promise((resolve, reject) => {
            dataBaseConection.query(
                `SELECT p.ID , p.Nome as nome, p.classeID, p.generoID, p.racaID 
                from personagem p WHERE p.ID =?`, id, (erro, resultado) => {
                if (erro) reject(erro);
                resolve(resultado)
            })

        })
    }



    update(parametros) {
        return new Promise((resolve, reject) => {
            dataBaseConection.query({
                sql: `UPDATE personagem SET Nome = ?, classeID = ?, racaID = ?, generoID = ? WHERE ID=?;`,
                values: Object.values(parametros),
            }, (erro, resultado) => {
                console.log(resultado, erro)
                if (erro) reject(erro)
                resolve(resultado)
            })
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            console.log('dps do await')
            dataBaseConection.query({
                sql: 'DELETE from personagem WHERE ID=?;',
                values: Number(id),
            }, (erro, resultado) => {
                console.log(resultado, erro)
                if (erro) reject(erro)
                resolve(resultado)
            })
        })
    }


}
