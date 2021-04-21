const dataBaseConection = require('../banco-de-dados/conexao')

module.exports = class Personagem {

    insere(personagem) {
        dataBaseConection.query({
            sql: 'INSERT INTO personagem (Nome, racaID, generoID) values(?, ?, ? )',
            timeout: 40000, // 40s
            values: Object.values(personagem)
        })

    }
}

