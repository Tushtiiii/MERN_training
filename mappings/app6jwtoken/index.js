const express=require("express");
const getCon=require("./config/connection");
const webRouter=require("./routers/webRouter");
const authRouter=require("./routers/authRouter");

const server =express();

server.use(express.json());
server.use("/web",webRouter);
server.use("/auth",authRouter);


server.listen(8989,async()=>{
    await getCon();
    console.log("Server starts.....");
})