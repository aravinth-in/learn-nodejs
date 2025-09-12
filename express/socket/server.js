const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const PORT = 3000;
const app = express();

const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static("public"));

const users = new Set();

io.on("connection", (socket) => {
  console.log("A user is connected");

  // Handle the users when the joins the chat
  socket.on("join", (userName) => {
    users.add(userName);
    socket.userName = userName;

    // Broadcast to all the users/clients that a new user has joined
    io.emit("userJoined", userName);

    // Sent the updated user list to all the clients
    io.emit("userList", Array.from(users));
  });

  // Handle incoming chat messages
  socket.on("chatMessage", (message) => {
    // Broadcast the received message to all clients
    io.emit("chatMessage", message);
  });

  // Handle when the user disconnects
  socket.on("disconnect", () => {
    console.log("A user is disconnected");
    users.forEach((user) => {
      if (user == socket.userName) {
        users.delete(user);

        // Broadcasts
        io.emit("userLeft", user);
        io.emit("userList", Array.from(users));
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
