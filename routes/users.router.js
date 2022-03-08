const express = require('express');
const router = express.Router();


router.get('/info-user',(req,res) => {
  res.json({
    first_name: "Adrian Dali",
    last_name: "Hernandez Rueda",
    num_cuenta: 317053766,
  })
})

module.exports = router;
