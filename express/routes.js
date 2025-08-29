const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/products', (req, res) => {
    const products = [
        {
            id: 1,
            label : 'Product 1'
        },
        {
            id: 2,
            label : 'Product 2'
        },
        {
            id: 3,
            label : 'Product 3'
        }
    ]
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});

