const express = require("express");

const router = express.Router();


console.log("ADMIN ROUTES LOADED");



const {
    getStats,
    getAllUsers
} = require("../controllers/adminController");



router.get("/test",(req,res)=>{

    res.json({
        message:"Admin route working"
    });

});



router.get("/stats", getStats);


router.get("/users", getAllUsers);



module.exports = router;