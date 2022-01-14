const express = require('express');
//const faker = require('faker');
//const id = require('faker/lib/locales/id_ID');
const ProductsService = require('./../services/product.service');
//importamos nuestro validadors
const validatorHandler = require('./../middlewares/validator.handler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('./../schema/product.schema');

const router = express.Router();

const service = new ProductsService();
//---------------------------------------------------------------
router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});
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

router.get('/filter', async (req, res) => {
  await res.send('yo soy un filter');
});

// los dos puntos significa que es un parametro
router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
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
);
//-----------------------------------------------------------------
//crear
router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  }
);
//---------------------------------------------------------------------
//actualizacion
router.patch(
  '/:id',
  //primero ver que el id este bien
  validatorHandler(getProductSchema, 'params'),
  //despues vemos que los datos sean correctos 
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);
//---------------------------------------------------------------------
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.delete(id);
  res.json(product);
});

module.exports = router;
