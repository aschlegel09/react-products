const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3001;
const dotenv = require('dotenv');

dotenv.config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(morgan('combined'));
// app.use('/v1', router);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/productlist"), { useNewUrlParser: true };

let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
