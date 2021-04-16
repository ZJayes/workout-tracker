const express = require("express");
// const mongojs = require("mongojs");
const logger = require("morgan");
// const path = require("path");
const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://zjayes:fitness@cluster0.fsfq6.mongodb.net/fitnessDB?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParse: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000, () => {
        console.log("App running on port 3000!")
    }))
    .catch((err) => console.log(err))

const app = express();

app.set('view engine', 'ejs');

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// const databaseUrl = "fitnessDB";
// const collections = ["workouts"];

// const db = mongojs(databaseUrl, collections);













// app.listen(3000, () => {
//     console.log("App running on port 3000!");
//   });