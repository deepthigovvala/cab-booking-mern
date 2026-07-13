const User = require("../models/User");
const Booking = require("../models/Booking");






const getStats = async (req,res)=>{

    try{


        const users = await User.countDocuments();

        const bookings = await Booking.countDocuments();


        const cabs = 0;



        res.json({

            users,
            cabs,
            bookings

        });


    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};









const getAllUsers = async(req,res)=>{


    try{


        const users = await User.find()
        .select("-password");



        res.json(users);


    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};







module.exports = {

    getStats,
    getAllUsers

};