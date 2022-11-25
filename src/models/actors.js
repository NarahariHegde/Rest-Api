const express = require("express");
const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  ranking: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  profession: {
    type: String,
    required: true,
    trim: true,
  },
  earnings: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    default: "indian",
    trim: true,
  },
});

const actor = new mongoose.model("celebrity_data", schema);

module.exports = actor;
