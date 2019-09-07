// @flow

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "DB connection error"));
db.once("open", () => {
	console.log("DB up and running!");
});

const workspaceRouter = require("./routes/workspace");

app.use("/workspace", workspaceRouter);

app.listen(port, () => {
	console.log(`Live from port ${port}`);
});
