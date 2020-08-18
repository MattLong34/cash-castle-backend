const express = require('express')
const app = express()

const cors = require('cors')

const knex = require('knex')
const config = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = knex(config)

app.use(cors())

app.get('/budgets', (request, response) => {
    database('budgets').select()
        .then(budgets => {
            response.json({ budgets })
        })
})

app.get('/budgets/:id', (request, response) => {
    database('budgets').select().where({ id: request.params.id }).first()
        .then(budget => {
            response.json({ budget })
        })
})

app.listen(8080)