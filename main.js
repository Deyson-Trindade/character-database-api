const express = require('express')
const app = express()
const roteador = require('./rotas/main')
const cors = require('cors')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use(cors())
app.use(roteador)

app.listen(3003, () =>console.log('Projetinho funcionando'))