const mongoose = require("mongoose");

const dish5Schema = mongoose.Schema(
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

const dish5Model = mongoose.model("dish5", dish5Schema);

module.exports = {
    dish5Model,
};