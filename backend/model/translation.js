// /Users/apple/Desktop/TranslatorApp/backend/model/translation.js
const mongoose = require("mongoose");

const translationSchema = new mongoose.Schema({
    fromlanguage: String,
    fromtranslation: String,
    tolanguage: String,
    totranslation: String,
    date: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' } // Reference to the user model
});

const translationModel = mongoose.model("translationsDataMain", translationSchema);
module.exports = translationModel;