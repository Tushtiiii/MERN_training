const express = require('express');
const getCon = require('./config/connection');
const userRouter = require('./routers/userRouter');
const deviceRouter = require('./routers/deviceRouter');
const empRouter = require('./routers/empRouter');
const courseRouter = require('./routers/courseRouter');


const server = express();
server.use(express.json());
server.use('/user',userRouter);
server.use('/device', deviceRouter);
server.use('/emp', empRouter);
server.use('/crs', courseRouter);

server.listen(8990,async() => {
    await getCon();
    console.log("Server is running on port 8990");
})
