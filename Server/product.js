const db = require('./db')
const utils = require('./utils')
const express = require('express')
const multer =require('multer')
const upload=multer({ dest: './Imageimg/'})

const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select * from Product`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/',upload.single('thumbnail'), (request, response) => {
    const {product_name, shipment_id,product_price,product_description,category_id,subcategory_id} = request.body
    const thumbnail=request.file.filename
    const connection = db.connect()
    const statement = `insert into Product (product_name, shipment_id,product_price,product_description,category_id,subcategory_id,thumbnail) values ('${product_name}',${shipment_id},${product_price},'${product_description}',${category_id},${subcategory_id},'${thumbnail}')`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.delete('/:product_id', (request, response) => {
    const {product_id} = request.params
    const connection = db.connect()
    const statement = `delete from Product where product_id = ${product_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

module.exports = router