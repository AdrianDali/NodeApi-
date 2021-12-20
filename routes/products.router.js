const express = require('express');
const faker = require('faker');

const router = express.Router();
//---------------------------------------------------------------
router.get('/', (req,res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for(let index = 0; index < limit; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl(),
    });
  }
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
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  })
})
//-----------------------------------------------------------------
router.post('/', (req,res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  })
 })

module.exports = router;