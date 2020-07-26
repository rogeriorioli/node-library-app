const express = require('express');
const BookController = require('../controllers/BookController')

const routes = express.Router();


routes.get('/', (req, res) =>  res.json({"/" : "nothing"}))

routes.get('/books', BookController.index);

routes.get('/book', BookController.search);

routes.get('/book/:_id', BookController.show);

routes.post('/book', BookController.store);

routes.put('/book/:_id',BookController.update)

routes.delete('/book/:_id',BookController.destroy)


module.exports = routes