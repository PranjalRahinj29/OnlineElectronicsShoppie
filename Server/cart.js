const db = require('./db')
const utils = require('./utils')
const express = require('express')
const multer =require('multer')


const router = express.Router()

router.post('/add_to_cart',(request,response)=>{

    const{product_id,product_name,product_price,customer_id}=request.body
   

    const connection=db.connect()
    const statement=`insert into Cart(product_id,product_name,product_price,customer_id) values(${product_id},'${product_name}',${product_price},${customer_id})`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

router.get('/:customer_id',(request,response)=>{
    const{customer_id}=request.params
    const connection=db.connect()
    const statement=`select * from Cart where customer_id = ${customer_id} `
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})


module.exports = router