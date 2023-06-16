const mongoose = require("mongoose");

const dish6Schema = mongoose.Schema(
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

const dish6Model = mongoose.model("dish6", dish6Schema);

module.exports = {
    dish6Model,
};