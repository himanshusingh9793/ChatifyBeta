import express from 'express'
import dotenv from "dotenv"
import mongoose from 'mongoose';
import userRoute from './Routes/user.route.js'
import messageRoute from './Routes/message.route.js'
import cookieParser from 'cookie-parser';
import cors from "cors";
import { app, server } from './SocketIo/server.js';
import path from "path";
dotenv.config()

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
const port =process.env.PORT ||5000
const URL=process.env.MONGO_URL;

try {
  mongoose.connect(URL);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log(error);
}
app.get('/', (req, res) => {
  res.send('Hello Himanshu!')
})
//route
app.use("/api/user",userRoute);
app.use("/api/message",messageRoute);

// code for deployment-

if(process.env.NODE_ENV === "production"){
const dirPath = path.resolve();
app.use(express.static("./FrontEnd/dist"));
app.get("*", (req, res) => {
res.sendFile(path.resolve(dirPath, "./Frontend/dist", "index.html"));
}
)
}
server.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

