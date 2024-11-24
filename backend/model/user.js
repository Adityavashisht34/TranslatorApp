const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
  fromlanguage: String,
  fromtranslation: String,
  tolanguage: String,
  totranslation: String,
  date: String
});

const userModel = mongoose.model("translationsData",userSchema)
module.exports = userModel



