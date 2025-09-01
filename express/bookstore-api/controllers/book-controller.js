const Book = require('../models/book');

const getAllBooks = async(req, res) => {
    try {
        const allBooks = await Book.find({});
        if(allBooks?.length > 0){
            res.status(200).json({
                success : true,
                message : 'List of books are fetched successfully',
                data : allBooks
            })
        }else{
            res.status(404).json({
                success : false,
                message : 'No books are found in the collection',
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : 'Something went wrong! Please try again',
        })
    }
};

const getSingleBookById = async(req, res) => {

};

const addNewBook = async(req, res) => {
    try {
        const newBooFormkData = req.body;
        const newlyCreatedBook = await Book.create(newBooFormkData);
        if(newlyCreatedBook){
            res.status(200).json({
                success : true,
                message : 'Book is added successfully',
                data: newlyCreatedBook,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : 'Something went wrong! Please try again',
        })
    }
};

const UpdateBookById = async(req, res) => {

};

const DeleteBookById = async(req, res) => {

};

module.exports = {
    getAllBooks,
    getSingleBookById,
    addNewBook,
    UpdateBookById,
    DeleteBookById
};