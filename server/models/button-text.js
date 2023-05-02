const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ButtonText = new Schema({
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ButtonText", ButtonText);
