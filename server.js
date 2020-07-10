const express = require("express");
const app = express();

const config = require("./config");
const db = require("./config/database");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(config.port, console.log("Server started on port: %s", config.port))
