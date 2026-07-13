const Booking = require("../models/Booking");



// Create Booking

const bookCab = async (req, res) => {

  try {

    const {
      pickupCity,
      dropCity,
      fare,
      date,
      time
    } = req.body;



    const booking = await Booking.create({

      userId: req.user.id,

      pickupCity,

      dropCity,

      fare,

      date,

      time

    });



    res.status(201).json({

      message:"Booking created successfully",

      booking

    });


  }
  catch(error){

    console.log(error);

    res.status(500).json({

      message:error.message

    });

  }

};






// Get User Bookings

const getMyBookings = async(req,res)=>{

  try{


    const bookings = await Booking.find({

      userId:req.params.userId

    });



    res.json(bookings);


  }
  catch(error){


    res.status(500).json({

      message:error.message

    });


  }

};








// Cancel Booking

const cancelBooking = async(req,res)=>{

  try{


    const booking = await Booking.findByIdAndUpdate(

      req.params.id,

      {
        status:"Cancelled"
      },

      {
        new:true
      }

    );


    res.json({

      message:"Booking Cancelled",

      booking

    });


  }
  catch(error){

    res.status(500).json({

      message:error.message

    });

  }

};








// Accept Booking

const acceptBooking = async(req,res)=>{

  try{


    const booking = await Booking.findByIdAndUpdate(

      req.params.id,

      {
        status:"Accepted"
      },

      {
        new:true
      }

    );


    res.json({

      message:"Booking Accepted",

      booking

    });



  }
  catch(error){


    res.status(500).json({

      message:error.message

    });


  }

};









// Reject Booking

const rejectBooking = async(req,res)=>{

  try{


    const booking = await Booking.findByIdAndUpdate(

      req.params.id,

      {
        status:"Rejected"
      },

      {
        new:true
      }

    );


    res.json({

      message:"Booking Rejected",

      booking

    });



  }
  catch(error){


    res.status(500).json({

      message:error.message

    });


  }

};









// Get All Bookings (Admin)

const getAllBookings = async(req,res)=>{

  try{


    const bookings = await Booking.find()

      .populate(
        "userId",
        "name email"
      );



    res.json(bookings);



  }
  catch(error){


    res.status(500).json({

      message:error.message

    });


  }

};






module.exports = {

  bookCab,

  getMyBookings,

  cancelBooking,

  acceptBooking,

  rejectBooking,

  getAllBookings

};