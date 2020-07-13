const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Places = require("../models/Places");

// @route   GET api/info
// @desc    Get user information
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const places = await Places.find({ user: req.user.id });
    res.json(places);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// // @route   Post api/info
// @desc    Add info
// @access  Public
router.post(
  "/",
  [auth, [check("name", "Name is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      name,
      email,
      phone,
      businessName,
      category,
      description,
    } = req.body;

    try {
      const addInfo = new Places({
        name,
        email,
        phone,
        businessName,
        category,
        description,
        user: req.user.id,
      });

      const info = await addInfo.save();

      res.json(info);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   PUT api/info
// @desc    Update info
// @access  Public
router.put("/", (req, res) => {
  res.send("Update info");
});

module.exports = router;
