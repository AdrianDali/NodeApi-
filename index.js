const express = require('express')
const routerApi = require('./routes')
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')
const port = 3000




const app = express();

//es un metodo para reconocer el objeto de solicitud entrante
//como objeto json,
app.use(express.json());

//definir una ruta y le haremos una peticion
// res = response
//  req = request
app.get('/',(req, res) =>{
  res.send("Hola mi server");

})
app.get('/nueva-ruta',(req, res) =>{
  res.send("Hola mi nueva ruta");

})


routerApi(app)

//para los middlewarew de error
app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler);

//escuchar un puerto en especifico
app.listen(port, () => {
  console.log('Mi port' + port);
})
