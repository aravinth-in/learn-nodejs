require('dotenv').config();
const express = require("express");
const connectToDB = require('./database/db');
const bookRoutes = require('./routes/book-routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
connectToDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});

