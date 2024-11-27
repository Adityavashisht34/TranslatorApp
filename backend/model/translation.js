const mongoose = require("mongoose");

const translationSchema = new mongoose.Schema({
  fromlanguage: String,
  fromtranslation: String,
  tolanguage: String,
  totranslation: String,
  date: String,
});

const translationModel = mongoose.model("translationsDataMain", translationSchema);
module.exports = translationModel;
