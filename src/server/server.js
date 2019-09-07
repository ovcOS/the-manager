const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const expressApp = express();
const port = process.env.PORT || 5000;

expressApp.use(cors());
expressApp.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "DB connection error"));
db.once("open", () => {
	console.log("DB up and running!");
});

expressApp.listen(port, () => {
	console.log(`Live from port ${port}`);
});
