const mongoose = require("mongoose");

const dish1Schema = mongoose.Schema(
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

const dish1Model = mongoose.model("poori", dish1Schema);

module.exports = {
    dish1Model,
};