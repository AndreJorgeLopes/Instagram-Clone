const mongoose = require("mongoose");
const config = require("./index");

const db = mongoose
  .connect(config.mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Error while connecting to the database", err));

module.exports = db;
