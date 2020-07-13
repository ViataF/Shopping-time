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
router.put("/:id", auth, async (req, res) => {
  const { name, email, phone, businessName, category, description } = req.body;

  //Build places object
  const placesFields = {};
  if (name) placesFields.name = name;
  if (email) placesFields.email = email;
  if (phone) placesFields.phone = phone;
  if (businessName) placesFields.businessName = businessName;
  if (category) placesFields.category = category;
  if (description) placesFields.description = description;

  try {
    let info = await Places.findById(req.params.id);

    if (!info) return res.status(404).json({ msg: "Info not found" });

    //  Make sure user owns contact
    if (info.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    info = await Places.findByIdAndUpdate(
      req.params.id,
      { $set: placesFields },
      { new: true }
    );

    res.json(info);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   Delete api/info/:id
// @desc    Delete info
// @access  Private

router.delete("/:id", auth, async (req, res) => {
  try {
    let info = await Places.findById(req.params.id);

    if (!info) return res.status(404).json({ msg: "Info not found" });

    //  Make sure user owns contact
    if (info.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Places.findByIdAndRemove(req.params.id);

    res.json({ msg: "Info removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
