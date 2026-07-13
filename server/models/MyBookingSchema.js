const mongoose = require("mongoose");


const MyBookingSchema = new mongoose.Schema({

  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },


  pickupCity:{
    type:String,
    required:true
  },


  dropCity:{
    type:String,
    required:true
  },


  fare:{
    type:String,
    required:true
  },


  date:{
    type:String,
    required:true
  },


  time:{
    type:String,
    required:true
  },


  status:{
    type:String,
    default:"Pending"
  },


  bookedAt:{
    type:Date,
    default:Date.now
  }


});


module.exports = mongoose.model(
  "Booking",
  MyBookingSchema
);