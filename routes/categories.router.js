//entorno de desarrollo:    npm run devc

const express = require('express');
const app = express();
//donde queremos que corra




app.get('/categories/:categoryId/products/:productId', (req, res) =>{
  const {categoryId,productId} = req.params;
  res.json({
    categoryId,
    productId
  })
})

