const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());

app.use(express.json());


const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const adminRoutes = require("./routes/adminRoutes");



console.log("Routes Loaded");

app.use("/api/auth", authRoutes);

app.use("/api/booking", bookingRoutes);

app.use("/api/admin", adminRoutes);

app.get("/", (req,res)=>{

    res.send("Cab Booking API Running");

});

mongoose
.connect(process.env.MONGO_URI)

.then(()=>{

    console.log("MongoDB Connected");

})

.catch((error)=>{

    console.log("MongoDB Error:",error.message);

});

const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{

    console.log(`Server running on port ${PORT}`);

});