// main-controller.js
const path = require('path');
const db = require('../models'); // Importa la conexión de Sequelize

let baseUrl = "http://localhost:3031"
let url = '/api'

const controller = {
    home: (req, res) => {
        let filepath = path.resolve(__dirname, '../views/home.html')
        res.sendFile(filepath);
    },
    remeras: (req, res) => {
        let filepath = path.resolve(__dirname, '../views/remeras.html')
        res.sendFile(filepath);
    },
    apiHome: (req, res) => {
        res.send({
            productos: baseUrl + url + "/products",
        });
    },
    apiProducts: async (req, res) => {
        try {
            const products = await db.Products.findAll(); // Utiliza el modelo de Sequelize
            res.json(products);
        } catch (error) {
            console.error('Error al obtener productos:', error);
            res.status(500).send('Error interno del servidor');
        }
    },
    apiProductDetail: async (req, res) => {
        const id = req.params.id;
        try {
            const productAEnviar = await db.Products.findByPk(id); // Utiliza el modelo de Sequelize
            res.json(productAEnviar);
        } catch (error) {
            console.error('Error al obtener el detalle del producto:', error);
            res.status(500).send('Error interno del servidor');
        }
    },
    apiProductCreate: async (req, res) => {
        try {
            await db.Products.create(req.body); // Utiliza el modelo de Sequelize
            res.json({ success: true, message: 'Producto creado exitosamente' });
        } catch (error) {
            console.error('Error al crear el producto:', error);
            res.status(500).send('Error interno del servidor');
        }
    },
    apiProductUpdate: async (req, res) => {
        const id = req.params.id;
        try {
            await db.Products.update(req.body, { where: { id } }); // Utiliza el modelo de Sequelize
            res.json({ success: true, message: 'Producto actualizado exitosamente' });
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
            res.status(500).send('Error interno del servidor');
        }
    },
    apiProductDelete: async (req, res) => {
        const id = req.params.id;
        try {
            await db.Products.destroy({ where: { id } }); // Utiliza el modelo de Sequelize
            res.json({ success: true, message: 'Producto eliminado exitosamente' });
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
}

module.exports = controller;
