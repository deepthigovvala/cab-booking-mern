const Booking = require("../models/Booking");

// Book Cab
const bookCab = async (req, res) => {
  try {
    const booking = await Booking.create({
      userId: req.user.id,
      pickupCity: req.body.pickupCity,
      dropCity: req.body.dropCity,
      fare: req.body.fare
    });

    res.json({
      message: "Booking created successfully",
      booking
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get My Bookings
const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      userId: req.params.userId,
    });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cancel Booking
const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: "Cancelled" },
      { new: true }
    );

    res.json({
      message: "Booking Cancelled Successfully",
      booking,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Accept Booking
const acceptBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: "Accepted" },
      { new: true }
    );

    res.json({
      message: "Booking Accepted",
      booking,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Reject Booking
const rejectBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: "Rejected" },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    res.json({
      message: "Booking Rejected",
      booking,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  bookCab,
  getMyBookings,
  cancelBooking,
  acceptBooking,
  rejectBooking,
  getAllBookings,
};