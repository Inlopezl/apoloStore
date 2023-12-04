const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main-controller');
const path = require('path');

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
// Otras rutas...

module.exports = router;
