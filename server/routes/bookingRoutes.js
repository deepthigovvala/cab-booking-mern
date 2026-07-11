const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const {
  bookCab,
  getMyBookings,
  cancelBooking,
  acceptBooking,
  rejectBooking,
  getAllBookings,
} = require("../controllers/bookingController");

router.post("/book", protect, bookCab);

router.get("/my/:userId", getMyBookings);
router.put("/cancel/:id", cancelBooking);
router.put("/accept/:id", acceptBooking);
router.put("/reject/:id", rejectBooking);
router.get("/all", getAllBookings);

module.exports = router;