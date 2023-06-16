const mongoose = require("mongoose");

const dish3Schema = mongoose.Schema(
  {
    image: String,
    restaurant: String,
    cusine: String,
    rating: String,
    delivery: String,
    price: String
  },
  {
    versionKey: false,
  }
);

const dish3Model = mongoose.model("dish3", dish3Schema);

module.exports = {
    dish3Model,
};