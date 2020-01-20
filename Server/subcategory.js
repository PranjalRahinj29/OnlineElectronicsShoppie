const db=require('./db')
const utils=require('./utils')
const express=require('express')

const router=express.Router()

router.get('/',(request,response)=>{
    const connection=db.connect()
    const statement=`select * from SubCategory`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

router.post('/',(request,response)=>{
    const{subcategory_id,subcategory_name,category_id,offer_id}=request.body
    const connection=db.connect()
    const statement=`insert into SubCategory (subcategory_id,subcategory_name,category_id,offer_id)values(${subcategory_id},'${subcategory_name}',${category_id},${offer_id})`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})


router.put('/:subcategory_id',(request,response)=>{
    const{subcategory_id}=request.params
    const connection=db.connect()

    const statement=`update SubCategory set subcategory_name='${subcategory_name}' where subcategory_id=${subcategory_id}`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))

    })
})




router.delete('/:subcategory_id',(request,response)=>{
    const{subcategory_id}=request.params
    const connection =db.connect()
    const statement=`delete from SubCategory where subcategory_id=${subcategory_id}`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})
module.exports=router