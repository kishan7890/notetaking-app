// const express = require("express");
// const {connectDB} = require("./db/db");
// const userRouter= require("./routes/userRoutes")
// const noteRouter=require("./routes/noteRoutes");
// const cors = require("cors");

// const app = express();
// app.use(cors({ 
//     origin: "https://sage-strudel-c0c11a.netlify.app",  // Allow requests from your frontend
//     methods: ["GET","POST","PUT","DELETE"],
//     allowedHeaders:["content-Type","Authorization"]
//   }
// ));
// app.use(express.json());


// app.use("/users",userRouter);
// app.use("/notes",noteRouter);



// app.listen(8080,()=>{
//     connectDB();
//     console.log("app is running on http://localhost/8080");
// })

// const express = require("express");
// const { connectDB } = require("./db/db");
// const userRouter = require("./routes/userRoutes");
// const noteRouter = require("./routes/noteRoutes");
// const cors = require("cors");

// const app = express();

// // ✅ CORS Middleware (Fixed)
// app.use(cors({
//     origin: "https://sage-strudel-c0c11a.netlify.app",  // Allow Netlify frontend
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow OPTIONS method
//     allowedHeaders: ["Content-Type", "Authorization"], // Fixed Header Capitalization
//     credentials: true // ✅ Important if sending authentication tokens/cookies
// }));

// // ✅ Handle Preflight Requests
// app.options("*", cors());

// app.use(express.json());

// app.use("/users", userRouter);
// app.use("/notes", noteRouter);

// app.listen(8080, () => {
//     connectDB();
//     console.log("App is running on http://localhost:8080");
// });




const express = require("express");
const { connectDB } = require("./db/db");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const cors = require("cors");

const app = express();

// ✅ CORS Middleware
app.use(cors({
    origin: "https://sage-strudel-c0c11a.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

// ✅ Default Route (Fixes "Not Found" when opening root URL)
app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use(express.json());

// API Routes
app.use("/users", userRouter);
app.use("/notes", noteRouter);

app.listen(8080, () => {
    connectDB();
    console.log("App is running on http://localhost:8080");
});
