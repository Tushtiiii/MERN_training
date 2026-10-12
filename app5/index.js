const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');
const fileRouter = require('./routers/fileRouter');
const getCon = require('./config/connection');
const personRouter = require('./routers/personRouter');
const mailRouter = require('./routers/mailRouter'); 

const server = express();

server.use(express.json());
server.use(fileupload());
server.use('/files', fileRouter);   
server.use('/person', personRouter);
server.use('/mail', mailRouter);

server.use(express.static(path.join(__dirname, 'uploads')));

server.listen(8989, async() => {
    await getCon();
    console.log('Server startsssss..........');
});
