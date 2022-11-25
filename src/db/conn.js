const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DB_CONNECTION_URL)
  .then(() => {
    console.log("connection successful....");
  })
  .catch(e => {
    console.log("connection failed....");
  });

//"mongodb://localhost:27017/olympics"
