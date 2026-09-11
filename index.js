import express from 'express'
import router from './router/petshop.js'
import Database from './config/database.js'

const app = express()

app.use(express.json())

app.use(router)

Database.db 
    .sync({force: true})
    .then((_) => {
    app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})
    })
    .catch((e) => [
    console.log(e)
])

