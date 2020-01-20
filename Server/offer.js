const db=require('./db')
const utils=require('./utils')
const express=require('express')


const router=express.Router()


router.get('/',(request,response)=>{

    const connection=db.connect()
    const statement=`select * from Offer`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})


router.post('/',(request,response)=>{

    const{offer_detail}=request.body
    const connection=db.connect()
    const statement=`insert into Offer(offer_detail) values('${offer_detail}')`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })

})


router.put('/:offer_id',(request,response)=>{
    const{offer_id}=request.params
    const connection=db.connect()
    const statement=`update Offer set offer_id=${offer_id}`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))

    })
})


router.delete('/:offer_id',(request,response)=>{
    const{offer_id}=request.params
    const connection=db.connect()
    const statement=`delete from Offer where(offer_id)=${offer_id}`
    connection.query(statement,(error,data)=>{
        connection.end()
            response.send(utils.createResult(error,data))
       
    })
})

module.exports=router