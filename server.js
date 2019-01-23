const express = require("express");//
// const path = require('path');//
const cors = require('cors');//
// const bodyParser = require('body-parser');//
// const cookieParser = require('cookie-parser');//
// const logger = require('morgan');//
const mongoose = require("mongoose");//
const PORT = process.env.PORT || 3001;
const routes = require('./routes');
const dotenv = require('dotenv');
// const Router = express.Router();
dotenv.config();
// const Product = require("./models/product");
// const User = require("./models/User");

// const apiIndex = require('./routes/api/index');//
const app = express();//
const keys = require('./client/src/keys');
const passport = require('passport');
const cookieSession = require('cookie-session');


var User = require("./models/userModel.js");
// const corsOption = {//
//   origin: true,
//   methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
//   credentials: true,
//   exposedHeaders: ['x-auth-token']
// };
// app.use(cors(corsOption));//

// oauth start
// set up cookie session for one day and encryption
// app.use(cookieSession({
//   maxAge: 24 * 60 * 60 * 1000,
//   keys: [keys.session.cookieKey]
// }));

// initialize passport
// app.use(passport.initialize());
// app.use(passport.session());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/api/v1/', index);//

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('*', (req, res) => {
    res.sendFile(path.join('build', 'index.html'));
  });
}
//  Serve static files
app.use(express.static('public'));
// Add routes, both API and view
// append /api for our http requests
app.use(routes);
// app.use("/api", apiIndex);


// Connect to the Mongo DB
mongoose.connect(keys.mongodb.dbURI || "mongodb://localhost/reactprod"
, { useNewUrlParser: true }
);


let new_user = new User({
  name:req.body.name
, email: req.body.email
, password: req.body.password
, phone: req.body.phone
, _enabled:false 
});

new_user.save(function(err){
if(err) console.log(err); 
});


let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// app.use(logger('dev'));//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));//

// Route to post our form submission to mongoDB via mongoose
// app.post("/submit", function(req, res) {
//   // Create a new user using req.body
//   User.create(req.body)
//     .then(function(dbUser) {
//       // If saved successfully, send the the new User document to the client
//       res.json(dbUser);
//     })
//     .catch(function(err) {
//       // If an error occurs, send the error to the client
//       res.json(err);
//     });
// });

// this is our get method
// this method fetches all available data in our database
// Router.get("/products", (req, res) => {
//   Product.find((err, data) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: data });
//   });
// });

// Router.get("/profile", (req, res) => {
//   User.find((err, data) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: data });
//   });
// }); 

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;