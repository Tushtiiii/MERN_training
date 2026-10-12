const express = require("express");
const getCon = require("./config/connection");
const seeder = require("./seeders/adminSeeders");

const server = express();

server.use(express.json());


server.listen(8989, async() => {
    await getCon();
    await seeder();
    console.log("Server is running on port 8989");
})