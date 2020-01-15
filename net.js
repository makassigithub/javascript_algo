const server = require('net').createServer();

server.on('connection',socket=> {
  console.log('Client connected');
  socket.write('Welcome my client\n');

  socket.on('data',data => {
     console.log(data);
     socket.write(data);
  })
  
socket.on('end',()=> console.log('Goodbye my client'));

//Can set encoding for both client and server
   
 socket.setEncoding('utf-8');
})

server.listen('8000',()=>console.log('server bound...'));

