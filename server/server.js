
//first install the require using terminal type 
//npm i http 
//npm i path
//npm i express
//nmp i socket.io

const http=require('http');
const path=require('path');
const express=require('express');
const socketIO=require('socket.io');
const app=express();
const server=http.createServer(app);
const io=socketIO(server);
app.use(express.static(path.join(__dirname, '../public')));
// app.use(express.static('../public'));
io.on('connection',function(socket)
{
    console.log('A user connected');
    socket.on('chat-message',function(data){
        io.emit('chat-message',data);
    });
    socket.on('disconnect',function(){
        console.log('user disconnected');

    })
 
});
const PORT=process.env.PORT||3004;
    server.listen(PORT,function(){
        console.log(`server is running on port http://localhost:${PORT}`);
    })
// on terminal:run the node server.js then server is running on port http://localhost:3004