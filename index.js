const http = require("node:http");

const server = http.createServer((req, res) => {
  const superProtocol = {
    firstName: "Ethereum",
    lastName: "Digital Ledger",
  };

  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify(superProtocol));
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
})
