const express = require("express");
// const mongojs = require("mongojs");
const logger = require("morgan");
// const path = require("path");
const mongoose = require('mongoose');
// require('dotenv').config()

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).catch(err => {
  console.log(err)
});

app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
})













// app.listen(3000, () => {
//     console.log("App running on port 3000!");
//   });