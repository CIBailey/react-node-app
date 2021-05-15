const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = "mongodb://localhost:27017/react-node-movies";
db.movies = require("./movies.model.js")(mongoose);

module.exports = db;
