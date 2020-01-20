const db=require('./db')
const utils=require('./utils')
const express=require('express')


const router=express.Router()


router.get('/',(request,response)=>{

    const connection=db.connect()
    const statement=`select * from Shipment`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})


router.post('/',(request,response)=>{

    const{shipment_name}=request.body
    const connection=db.connect()
    const statement=`insert into Shipment(shipment_name) values('${shipment_name}')`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })

})


router.put('/:shipment_id',(request,response)=>{
    const{shipment_id}=request.params
    const connection=db.connect()
    const statement=`update Shipment set shipment_id=${shipment_id}`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))

    })
})


router.delete('/:shipment_id',(request,response)=>{
    const{shipment_id}=request.params
    const connection=db.connect()
    const statement=`delete from Shipment where(shipment_id)=${shipment_id}`
    connection.query(statement,(error,data)=>{
        connection.end()
            response.send(utils.createResult(error,data))
       
    })
})

module.exports=router