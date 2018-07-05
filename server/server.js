const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const expressJwt = require("express-jwt");
const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/api", expressJwt({secret: process.env.SECRET}));
app.use("/auth", require("./routes/auth"));
app.use("/api/vacations", require("./routes/vacations"));

mongoose.connect("mongodb://localhost/vacationLocations", err => {
    if(err) throw err;
    console.log("Connected to the database!");
})

app.listen(port, () => {
    console.log(`Server connected to port ${port}...`);
})