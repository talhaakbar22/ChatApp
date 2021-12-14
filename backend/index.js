const express = require("express");
const app = express();
const http = require ("http");
const server =http.createServer(app);
const {Server} = require('socket.io')
const  io = new Server(server);
const port = 3000;

io.on("connection",socket =>{
    console.log("A User Connected :D")
    socket.on("chat message",msg =>{
        console.log(msg)
        io.emit("chat message",msg)
    })
})

server.listen(port,()=> console.log("server running on port" + port) )
