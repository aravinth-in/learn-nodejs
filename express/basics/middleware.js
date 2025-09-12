const express = require("express");
const app = express();
const port = 3000;

const myFirstMiddleWare = (req, res, next) => {
  console.log("This is the first middleware which will run on every request");
  next();
};

app.use(myFirstMiddleWare);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
