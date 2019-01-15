const express = require("express");//
const path = require('path');//
const cors = require('cors');//
const bodyParser = require('body-parser');//
const cookieParser = require('cookie-parser');//
const logger = require('morgan');//
const mongoose = require("mongoose");//
global.mongoose = mongoose;
const PORT = process.env.PORT || 3001;
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();

const index = require('./routes/index');//
const app = express();//

const corsOption = {//
  origin: true,
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));//

app.set('views', path.join(__dirname, 'views'));//
app.set('view engine', 'jade');//

app.use(logger('dev'));//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//

app.use('/api/v1/', index);//


// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

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

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;