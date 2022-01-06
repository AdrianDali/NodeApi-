const Join = require('joi');
//data transfer object
const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10)

const createProductSchema = Joi.object({
  
})