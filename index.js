const express = require('express')
const routerApi = require('./routes')
const port = 3000




const app = express();

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


//escuchar un puerto en especifico
app.listen(port, () => {
  console.log('Mi port' + port);
})
