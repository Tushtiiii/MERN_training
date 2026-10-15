const express = require("express");
const getCon = require("./config/connection");
const seeder = require("./seeders/adminSeeders");
const webRouter = require("./routers/webRouter");
const authRouter = require("./routers/authRouter")

const server = express();

server.use(express.json());
server.use("/web",webRouter);
server.use("/auth",authRouter);


server.listen(8989, async() => {
    await getCon();
    await seeder();
    console.log("Server is running on port 8989");
})
