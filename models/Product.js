const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  description_more: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    default: 0
  },
  available_quantity: {
    type: Number,
    required: false
  },
  img_main: {
    type: Buffer
  },
  img_mini: {
    type: Buffer
  }

}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);