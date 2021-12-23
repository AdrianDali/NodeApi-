//crear funcion que nos hara llegar un middleware de tipo error
function logErrors (err,req,res,next){
  console.log("log errors");
  console.log(err);
  next(err);//importyante para saber que se esta enviand a un middleware de error,
  //si no tiene el error dentro entonces se esta mandando a uno normal
}

//detectar un error pero crea un formato para el cliente
//deber tener los cuatro parametros aunque no se ocupe next
function errorHandler (err,req,res,next){
  console.log("Error handler");
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
}

//para saber si el error el de tipo boom
function boomErrorHandler(err,req,res,next){
  if(err.isBoom){
    const {output} = err;
    res.status(output.statusCode).json(
      output.payload)
    }
  next(err)
}


module.exports = { logErrors, errorHandler, boomErrorHandler }
