const http = require("node:http");
const fs = require("node:fs");


const server = http.createServer((req, res) => {
  const superProtocol = {
    firstName: "Ethereum",
    lastName: "Digital Ledger",
  };

  const html = fs.readFileSync("./index.html", "utf-8");
  fs.createReadStream(__dirname + "/index.html").pipe(res);
  // res.writeHead(200, {"Content-Type": "text/html"});
  // res.end(html);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
})
