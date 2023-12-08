const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main-controller');
const path = require('path');
let url = '/api';


router.get("/", mainController.home);

router.get("/remeras", (req, res) => {
  // Usar path.join para construir la ruta del archivo correctamente
  let filepath = path.join(__dirname, '../views/remeras.html');
  res.sendFile(filepath);
});
router.get("/buzos", (req, res) => {
    // Usar path.join para construir la ruta del archivo correctamente
    let filepath = path.join(__dirname, '../views/buzos.html');
    res.sendFile(filepath);
  });
router.get("/pantalones", (req, res) => {
    // Usar path.join para construir la ruta del archivo correctamente
    let filepath = path.join(__dirname, '../views/pantalones.html');
    res.sendFile(filepath);
  });

router.get(url+'/', mainController.apiHome);

router.get(url+'/productos', mainController.apiProducts);
router.get(url+'/productos'+'/:id', mainController.apiProductDetail);

router.post(url+'/productos', mainController.apiProductCreate);

router.delete(url+'/productos'+'/:id', mainController.apiProductDelete);

module.exports = router;
module.exports = router;
