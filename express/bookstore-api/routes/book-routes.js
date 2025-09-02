const express = require('express');
const {getAllBooks, getSingleBookById, addNewBook, UpdateBookById, DeleteBookById} = require('../controllers/book-controller');

const router = express.Router();

router.get('/get', getAllBooks);
router.get('/get/:id', getSingleBookById);
router.post('/add', addNewBook);
router.put('/update/:id', UpdateBookById);
router.delete('/delete/:id', DeleteBookById);

module.exports = router;