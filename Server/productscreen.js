const db = require('./db')
const utils = require('./utils')
const express = require('express')
const multer =require('multer')
//const upload=multer({ dest: './Imageimg/'})

const router = express.Router()



router.get('/:category_id',(request, response) => {
    const {category_id} = request.params
    const connection = db.connect()
    const statement = `select * from Product p inner join Category c on(p.category_id = c.category_id) inner join SubCategory sc on(p.category_id = sc.category_id);`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.get('/details/:product_id',(request,response)=>{
    const {product_id} = request.params
    const connection = db.connect()
    const statement = `select * from Product where product_id =${product_id}`
    connection.query(statement,(error,data)=>{
        connection.end()
        if(data.length > 0){
            response.send(utils.createResult(error,data[0]))
        }else{
            response.send(utils.createResult('product does not exist'))
        }
        
    })
})
router.delete('/:product_id',(request,response)=>{
    const{product_id}=request.params

    const connection=db.connect()

    const statement=`delete from Product where product_id=${product_id}`

    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

router.put('/update/:product_id',(request,response)=>{
    const{product_id}=request.params

    const{product_name,shipment_id,product_price,product_description,category_id,subcategory_id}=request.body

    const connection=db.connect()

    const statement=`update Product set product_name=${product_name},shipment_id=${shipment_id},product_price='${product_price}',
    product_description='${product_description}',category_id=${category_id},subcategory_id=${subcategory_id} where product_id=${product_id}`

    connection.query(statement,(error,data)=>{
        connection.end()

        response.send(utils.createResult(error,data))
    })
})

module.exports = router





