const express = require('express');
//const faker = require('faker');
//const id = require('faker/lib/locales/id_ID');
const ProductsService = require('./../services/product.service')

const router = express.Router();

const service = new ProductsService();
//---------------------------------------------------------------
router.get('/', (req,res) => {
  const products = service.find();
  res.json(products)
})
/**
 * app.get('/products',(req, res) =>{
  res.json([
    {
    name: "product 1",
    price: 1000
  },
  {
    name: "product 2",
    price: 1000
  }
])

})
 */
//--------------------------------------------------------------

router.get('/filter', (req,res) => {
  res.send("yo soy un filter")
})

// los dos puntos significa que es un parametro
router.get('/:id', (req,res) => {
  const { id } = req.params;
  const product = service.findOne(id)
  res.json(product)
  //if( id === '999'){
    //res.status(404).json({
      //message: "not found"
    //})
  //}else{
    //res.json({
      //id,
      //name: 'Product 2',
      //price: 2000
    //})
 // }

}
)
//-----------------------------------------------------------------
router.post('/', (req,res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  })
 })
//---------------------------------------------------------------------
router.patch('/:id', (req,res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  })
 })
//---------------------------------------------------------------------
router.delete('/:id',(req,res) => {
  const { id } = req.params;
  res.json({
    message: 'delete',
    id,
  })
})


module.exports = router;
