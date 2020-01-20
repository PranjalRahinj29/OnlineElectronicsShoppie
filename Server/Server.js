const express = require('express')
const bodyParser = require('body-parser')

const routerCustomer=require('./customer')
const routerCategory=require('./category')
const routerProduct=require('./product')
const routerSubCategory=require('./subcategory')
const routerOffer=require('./offer')
const routerShipment=require('./shipment')
const routerProductScreen=require('./productscreen')
const routerCart=require('./cart')

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())
app.use('/customer',routerCustomer)
app.use('/category',routerCategory)
app.use('/product',routerProduct)
app.use('/subcategory',routerSubCategory)
app.use('/offer',routerOffer)
app.use(express.static('Imageimg'))
app.use('/shipment',routerShipment)
app.use('/productscreen',routerProductScreen)
app.use('/cart',routerCart)
app.listen(4000, '0.0.0.0', () => {
    console.log('server started  on port 4000')
})