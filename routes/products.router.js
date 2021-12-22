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
  const newProduct = service.create(body);
  res.status(201).json(newProduct)
 })
//---------------------------------------------------------------------
router.patch('/:id', (req,res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body)
  res.json(product)
 })
//---------------------------------------------------------------------
router.delete('/:id',(req,res) => {
  const { id } = req.params;
  const product = service.delete(id)
  res.json(product)
})


module.exports = router;
