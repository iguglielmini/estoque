const express = require('express')
const UsersController = require('./controllers/UsersController');
const ProductController = require('./controllers/ProductController');
const PromocaoController = require('./controllers/PromocaoController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

//Login
routes.post('/sessions', SessionController.create);

// Users
routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);
routes.delete('/users/:id', UsersController.delete);

// Product
routes.post('/product', ProductController.create);
routes.get('/product', ProductController.index);
routes.delete('/product/:id', ProductController.delete);

//promocao
routes.get('/promocao', PromocaoController.index);
routes.post('/promocao', PromocaoController.create);
routes.delete('/promocao/:id', PromocaoController.delete);


module.exports = routes;