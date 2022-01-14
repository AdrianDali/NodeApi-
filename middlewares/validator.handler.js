const boom = require('@hapi/boom');
//const { fa } = require('faker/lib/locales');

//middleware dinamico
//creador de middlewarwe
//funcion que retorna una funcion
// protperty para saber en que parte esta la informacion
function validatorHandler(schema, property) {
  return (req, res, next) => {
    //la info puede venir de barios lugares
    //ej: body , params ,query
    const data = req[property];
    //validate valida la informacion
    //abort early es para que nos mande todos los errores y no el primero que encuentra
    const { error } = schema.validate(data, {abortEarly: false});
    //vemos si hay un error
    if (error) {
      //error de tipo 400
      next(boom.badRequest(error));
    }
    // si no hay error todo sigue normal
    next();
  };
}

module.exports = validatorHandler;
