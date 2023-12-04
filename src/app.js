const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();

// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'tu-host',
    user: 'tu-usuario',
    password: 'tu-contraseña',
    database: 'tu-nombre-de-base-de-datos'
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Error de conexión a la base de datos:', err);
      return;
    }
    console.log('Conexión a la base de datos establecida');
  });

// Importar y usar el enrutador principal
const mainRouter = require('./routes/main-router');
app.use(mainRouter);

// Otras configuraciones y rutas

const port = 3031;
app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`));
