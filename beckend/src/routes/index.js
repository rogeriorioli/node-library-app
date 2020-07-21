const express = require('express');
const BookController = require('../controllers/BookController')

const routes = express.Router();


routes.get('/', BookController.index);

routes.post('/book', BookController.store);


module.exports = routes