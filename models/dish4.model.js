const mongoose = require("mongoose");

const dish4Schema = mongoose.Schema(
  {
    image: String,
    restaurant: String,
    cusine: String,
    rating: Number,
    delivery: String,
    price: String
  },
  {
    versionKey: false,
  }
);

const dish4Model = mongoose.model("dish4", dish4Schema);

module.exports = {
    dish4Model,
};