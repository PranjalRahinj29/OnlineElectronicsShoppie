const db = require('./db')
const utils = require('./utils')
const express = require('express')
//const cryptoJs = require('crypto-js')

const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select * from Customer`
    connection.query(statement, (error, data) => {
        connection.end()
        
        response.send(utils.createResult(error, data))
    })
})
router.post('/', (request, response) => {
    const {customer_name, email, password,mobile_no} = request.body
   // const encryptedPassword = '' + cryptoJs.MD5(password)
    const connection = db.connect()
    const statement = `insert into Customer (customer_name, email,password,mobile_no) values ('${customer_name}', '${email}', '${password}','${mobile_no}')`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})
router.post('/login', (request, response) => {
    const {email, password} = request.body
    //const encryptedPassword = '' + cryptoJs.MD5(password)
    const connection = db.connect()
    const statement = `select * from Customer where email = '${email}' and password = '${password}'`
    connection.query(statement, (error, users) => {
        connection.end()
        
        if (users.length == 0) {
            response.send(utils.createResult('user does not exist'))
        } else {
            const user = users[0]
            const info = {
               
                email: user['email'],
                password: user['password'],
                customer_id:user['customer_id']
            }
            response.send(utils.createResult(null, info))
        }
    })
})
router.post('/register', (request, response) => {
    const {customer_name, email, password ,mobile_no} = request.body
    //const encryptedPassword = '' + cryptoJs.MD5(password)
    const connection = db.connect()

    const statement1 = `select * from Customer where email = '${email}'`
    connection.query(statement1, (error, users) => {

        if (users.length == 0) {
            // user with the required email does not exist

            // insert a new record
            const statement = `insert into Customer (customer_name, email, password,mobile_no) values ('${customer_name}', '${email}', '${password}','${mobile_no}')`
            connection.query(statement, (error, data) => {
                connection.end()
                response.send(utils.createResult(error, data))
            })
        } else {
            // user with email already exists
            connection.end()
            response.send(utils.createResult('email exists. please use another email.'))
        }


    })

    
})

module.exports = router