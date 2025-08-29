const express = require("express");
const app = express();
const port = 3000;

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

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/product/:id', (req, res) => {
    console.log("req.params", req.params);

    const productId = parseInt(req.params.id);
    const getProduct = products.find(product => product.id === productId);

    if(getProduct){
        res.json(getProduct);
    }
    else
    {
        res.status(404).send("Product not found!");
    }
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
