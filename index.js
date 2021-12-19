//entorno de desarrollo:    npm run devc

const express = require('express');
const app = express();
//donde queremos que corra
const port = 3000

//definir una ruta y le haremos una peticion
// res = response
//  req = request
app.get('/',(req, res) =>{
  res.send("Hola mi server");

})
app.get('/nueva-ruta',(req, res) =>{
  res.send("Hola mi nueva ruta");

})
// los dos puntos significa que es un parametro
app.get('/products/:id', (req,res) => {
  const {id} = req.params;
  res.json({
    id,
    name: "Product 2",
    price: 2000
  })
})

app.get('/categories/:categoryId/products/:productId', (req, res) =>{
  const {categoryId,productId} = req.params;
  res.json({
    categoryId,
    productId
  })
})

app.get('/products',(req, res) =>{
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

app.get('/info-user',(req,res) => {
  res.json({
    first_name: "Adrian Dali",
    last_name: "Hernandez Rueda",
    num_cuenta: 317053766,
  })
})

//escuchar un puerto en especifico
app.listen(port, () => {
  console.log('Mi port' + port);
})
