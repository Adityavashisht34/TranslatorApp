// /Users/apple/Desktop/TranslatorApp/backend/model/user.js
const mongoose = require("mongoose");
const express = require("express");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    translations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'translationsDataMain' }] // Array of translation IDs
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;