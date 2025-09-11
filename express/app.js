const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
// It enables Express to automatically parse incoming JSON request bodies and
// make the parsed data available on req.body.
app.use(express.json());

const books = [
  {
    id: 1,
    title: "Book 1",
  },
  {
    id: 2,
    title: "Book 2",
  },
  {
    id: 3,
    title: "Book 3",
  },
];

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our bookstore api",
  });
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/book/:id", (req, res) => {
  console.log("req.params", req.params);

  const bookId = parseInt(req.params.id);
  const book = books.find((item) => item.id === bookId);

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({
      message: "Book not found!",
    });
  }
});

app.post("/add", (req, res) => {
  const randomId = Math.floor(Math.random() * 1000);
  const newBook = {
    id: randomId,
    title: `Book ${randomId}`,
  };

  books.push(newBook);
  res.status(200).json({
    data: newBook,
    message: "New book is added successfully",
  });
});

app.put("/update/:id", (req, res) => {
  console.log("req.body.title", req.body.title);

  const findCurrentBook = books.find(
    (item) => item.id === parseInt(req.params.id)
  );
  if (findCurrentBook) {
    findCurrentBook.title = req.body.title || findCurrentBook.title;
    res.status(200).json({
      message: `Book with ID ${req.params.id} is updated successfully`,
      data: findCurrentBook,
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

app.delete("/delete/:id", (req, res) => {
  const findIndexOfCurrentBook = books.findIndex(
    (item) => item.id === parseInt(req.params.id)
  );
  if (findIndexOfCurrentBook !== -1) {
    const deltedBook = books.splice(findIndexOfCurrentBook, 1);
    res.status(200).json({
      message: `Book with ID ${req.params.id} is deleted successfully`,
      data: deltedBook[0],
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
