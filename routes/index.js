const express = require('express');
const router = express.Router();
const Name = require('../models/first_name.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/firstname", async (req, res) => {

  try {

    const newName = new Name();
    newName.Name = req.body.Name;

    newName.save(function(err){
    if (err){
      console.log('No se pudo registrar el nombre: '+req.body.Name);
      res.render('error', );
    }
    else{
      console.log('se guardo el nombre '+req.body.Name);
      res.redirect('/');
    }
  });

  } catch (err) {
    console.log(err);
  }

});




module.exports = router;
