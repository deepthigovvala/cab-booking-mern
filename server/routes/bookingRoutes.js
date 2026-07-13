const express = require("express");

const router = express.Router();


const { protect } = require("../middleware/authMiddleware");


const {
  bookCab,
  getMyBookings,
  cancelBooking,
  acceptBooking,
  rejectBooking,
  getAllBookings

} = require("../controllers/bookingController");




// Create Booking

router.post(
  "/book",
  protect,
  bookCab
);




// User bookings

router.get(
  "/my/:userId",
  getMyBookings
);




// Cancel

router.put(
  "/cancel/:id",
  cancelBooking
);




// Accept

router.put(
  "/accept/:id",
  acceptBooking
);




// Reject

router.put(
  "/reject/:id",
  rejectBooking
);




// Admin all bookings

router.get(
  "/all",
  getAllBookings
);



module.exports = router;