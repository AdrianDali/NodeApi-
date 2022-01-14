//product.schema tiene las restricciones de producttos
//dto  (data transfer object)
//Joi sirve para validacion de datos



//importamos joi
const Joi = require('joi');
// nuestro id debe ser de tipo id
const id = Joi.string().uuid();
//ombre sera string alfanumerico entre 3 y 15 caracteres
const name = Joi.string().min(3).max(15);
//precio sera un numero entero de minimo 10
const price = Joi.number().integer().min(10);

const image = Joi.string().uri()

//lo que se nesecitara para la creacion
//un objeto
const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required()
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image
});
//por buena practica se deja como objeto a pesar de que sea uno
const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {createProductSchema, updateProductSchema,getProductSchema}
