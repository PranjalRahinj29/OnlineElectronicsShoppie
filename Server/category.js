const db = require('./db')
const utils = require('./utils')
const express = require('express')

const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select * from Category`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/', (request, response) => {
    const {category_name} = request.body

    const connection = db.connect()
    const statement = `insert into Category (category_name) values ('${category_name}')`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.put('/:category_id', (request, response) => {
    const {category_id} = request.params
    const {category_name} = request.body
    const connection = db.connect()
    const statement = `update Category set category_name = '${category_name}' where category_id = ${category_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.delete('/:category_id', (request, response) => {
    const {category_id} = request.params
    const connection = db.connect()
    const statement = `delete from Category where category_id = ${category_id}`
    connection.query(statement, (error, data) => {
           connection.end()
            response.send(utils.createResult(error, data))
        })
    })


module.exports = router