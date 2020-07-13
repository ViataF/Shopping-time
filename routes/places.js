const express = require("express");
const router = express.Router();

// @route   GET api/info
// @desc    Get user information
// @access  Private
router.get("/", (req, res) => {
  res.send("Get user information");
});

// @route   PUT api/info
// @desc    Update contact
// @access  Public
router.put("/", (req, res) => {
  res.send("Update info");
});

module.exports = router;
