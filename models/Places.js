const mongoose = require("mongoose");

const PlacesSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  businessName: {
    type: String,
    required: true,
  },
  openTimes: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("places", PlacesSchema);
