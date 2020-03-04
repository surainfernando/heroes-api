const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  birthname: {
    type: String,
    minlength: 3,
    maxlength: 20
  },
  likeCount: Number,
  deceased: {
    type: Boolean,
    default: false
  },
  superPowers: {
    type: [String],
    enum: [
      "Invisibility",
      "Barking",
      "Flying",
      "LiquorPower",
      "Disappearance",
      "TikTok",
      "Blackmail",
      "Docker"
    ]
  },
  movies: [String],
  imgUrl: String
});

const Hero = mongoose.model("Hero", heroSchema);

module.exports = Hero;
