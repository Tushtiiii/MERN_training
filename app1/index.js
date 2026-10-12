const express = require('express');
const empRouter = require('./routers/empRouter');

const server = express();

server.use('/emp',empRouter);

// server.get('/',(req,res)=>{
//     res.send("<h1 style='color:blue'> Welcome to the server</h1>");
// });


// server.get('/hey',(req,res)=>{
//     res.send("<h1 style='color:green'> how about u </h1>");
// });

// server.get("/get/:roll",(req,res)=>{
//     roll=req.params.roll;
//     res.send("<h1 > your roll number is  </h1>"+roll);
// })

// server.get("/data",(req,res)=>{
//     nm=req.query.name;
//     age=req.query.age;
//     res.send("<h1 > your name is  </h1>"+nm+"<h1> your age is </h1>"+age);
// })

server.listen(8989,()=>console.log('Server is running ........'));