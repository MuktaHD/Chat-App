// const http =require('http');
// const path=require('path');
// const express =require('express');
// const socketIO=require('socket.io');

// const app=express();

// const server=http.createServer(app);

// const io=socketIO(server);
// //Server static files from the public directory
// app.use(express.static(path.join(__dirname,'../public')));

// //listen for a connection to the websocket

// io.on('connection',function(socket){
//     console.log('a user connected');
//     //listen for chat messages
//     socket.on('chat message',function(data){
//         io.emit('chat message',data);
//     });
//     //listen for a disconnect
//     socket.on('disconnect',()=>{
//         console.log('user disconnected');
//     });
// });
// //start the server
// const PORT=process.env.PORT || 3003;

// server.listen(PORT,function(){
//     console.log('listening on port ${PORT} ');
// });


const http=require('http');
const path=require('path');
const express=require('express');
const socketIO=require('socket.io');
const app=express();
const server=http.createServer(app);
const io=socketIO(server);

app.use(express.static('../public'));
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
        console.log(`server is running on port ${PORT}`);
    })