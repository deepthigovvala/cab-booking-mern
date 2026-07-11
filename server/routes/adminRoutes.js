const express = require("express");
const router = express.Router();

const { getAllUsers } = require("../controllers/adminController");
const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/adminMiddleware");

router.get("/users", protect, adminOnly, getAllUsers);

module.exports = router;