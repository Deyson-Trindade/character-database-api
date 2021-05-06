const dataBaseConection = require('../banco-de-dados/conexao')

module.exports = class Personagem {
    insert(personagem) {
        dataBaseConection.query({
            sql: 'INSERT INTO personagem (Nome, racaID, generoID, classeID) values(?, ?, ?, ? )',
            timeout: 40000, // 40s
            values: Object.values(personagem)
        })

    }
    /* select(erro) {
        if (erro) throw erro
        dataBaseConection.query('SELECT * FROM personagem', function (erro, resultado) {
            if (erro) throw erro
            console.log(resultado)
        })
        
    } */

    select() {
        return new Promise((resolve, reject) => {
            dataBaseConection.query(
                `SELECT p.Nome as nome, c.Nome as classe, g.Nome as genero, r.Nome as raca 
                from personagem p
                join classe c on p.classeID = c.ID 
                join genero g on p.generoID = g.ID 
                join raca r on p.racaID = r.ID`, (erro, resultado) => {
                if (erro) reject(erro);
                resolve(resultado)
            })

        })
    }


}

