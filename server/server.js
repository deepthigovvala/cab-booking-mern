const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


const app = express();



// Middleware

app.use(cors());

app.use(express.json());





// Routes Import

const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const adminRoutes = require("./routes/adminRoutes");



console.log("Routes Loaded");





// API Routes

app.use("/api/auth", authRoutes);

app.use("/api/booking", bookingRoutes);

app.use("/api/admin", adminRoutes);






// Home Test API

app.get("/", (req,res)=>{

    res.send("Cab Booking API Running");

});







// MongoDB Connection

mongoose
.connect(process.env.MONGO_URI)

.then(()=>{

    console.log("MongoDB Connected");

})

.catch((error)=>{

    console.log("MongoDB Error:",error.message);

});







// Server Start

const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{

    console.log(`Server running on port ${PORT}`);

});