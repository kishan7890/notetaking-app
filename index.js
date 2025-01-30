const express = require("express");
const {connectDB} = require("./db/db");
const userRouter= require("./routes/userRoutes")
const noteRouter=require("./routes/noteRoutes");
const cors = require("cors");

const app = express();
app.use(cors);
app.use(express.json());


app.use("/users",userRouter);
app.use("/notes",noteRouter);



app.listen(8080,()=>{
    connectDB();
    console.log("app is running on http://localhost/8080");
})