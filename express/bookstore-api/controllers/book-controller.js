const Book = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: "List of books are fetched successfully",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No books are found in the collection",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

const getSingleBookById = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const bookDetailsById = await Book.findById(getCurrentBookId);

    if (!bookDetailsById) {
      return res.status(404).json({
        success: false,
        message: "Book with current ID is not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: bookDetailsById,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

const addNewBook = async (req, res) => {
  try {
    const newBooFormkData = req.body;
    const newlyCreatedBook = await Book.create(newBooFormkData);
    if (newlyCreatedBook) {
      res.status(200).json({
        success: true,
        message: "Book is added successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

const UpdateBookById = async (req, res) => {
  try {
    const updatedBookFromData = req.body;
    const getCurrentBookId = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(
      getCurrentBookId,
      updatedBookFromData,
      {
        new: true,
      }
    );

    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book with current ID is not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book is updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

const DeleteBookById = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(getCurrentBookId);

    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book with current ID is not found!",
      });
    }

    res.status(200).json({
      success: true,
      data: deletedBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  UpdateBookById,
  DeleteBookById,
};
