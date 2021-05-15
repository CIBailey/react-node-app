const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const dotenv = require("dotenv");
dotenv.config();

const db = {};
db.mongoose = mongoose;
db.url = process.env.REACT_APP_MONGO_DB_URL;
db.movies = require("./movies.model.js")(mongoose);

module.exports = db;
