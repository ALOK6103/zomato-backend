const mongoose = require("mongoose");

const dish2Schema = mongoose.Schema(
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

const dish2Model = mongoose.model("dish2", dish2Schema);

module.exports = {
    dish2Model,
};