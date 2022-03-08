const express = require('express')
const routerApi = require('./routes')
const cors = require('cors')
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')
const port = 3000




const app = express();

//es un metodo para reconocer el objeto de solicitud entrante
//como objeto json,
app.use(express.json());

/**Esta es la forma mas facil de usar cors,
 * habilitamos a cualquier dominio.
 * Si no ponemos esto solo aceptara a su mismo dominio */
//const whitelist = ['http://localhost:8080', 'https://myapp.com', 'localhost:3000/index.html'];
/**const options = {
 origin: (origin,callback) =>{
   if (whitelist.includes(origin) ) {
     callback(null,true)
   } else{
     callback(new Error('Noooooo permitido'))
   }
 }
}**/



//definir una ruta y le haremos una peticion
// res = response
//  req = request
app.get('/',cors(),(req, res) =>{
  res.send("Hola mi server");

})
app.get('/nueva-ruta',(req, res) =>{
  res.send("Hola mi nueva ruta");

})


routerApi(app)

app.use(cors(/**options**/));

//para los middlewarew de error
app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler);

//escuchar un puerto en especifico
app.listen(port, () => {
  console.log('Mi port' + port);
})
