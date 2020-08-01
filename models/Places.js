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
  open: {
    type: String,
    required: true,
  },
  closed: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  businessURL: {
    type: String,
  },
  logo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("places", PlacesSchema);
