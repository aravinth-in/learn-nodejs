/*
 * You can use PM2 to manage clustering:
 *   pm2 start no-cluster.js -i 0   # 0 lets PM2 decide the optimal number of workers
 *   pm2 start no-cluster.js -i 2   # 2 creates 2 workers
 *   pm2 stop no-cluster.js         # Stop the app
*/

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/slow-page") {
    for (let i = 0; i < 6000000000; i++) {} // Simulate CPU work
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Slow Page");
  }
});

server.listen(8000, () => console.log("Server is running on port 8000"));