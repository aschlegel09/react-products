const express = require("express");//
// const path = require('path');//
// const cors = require('cors');//
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

// const corsOption = {//
//   origin: true,
//   methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
//   credentials: true,
//   exposedHeaders: ['x-auth-token']
// };
// app.use(cors(corsOption));//

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/api/v1/', index);//

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
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

let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// app.use(logger('dev'));//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));//


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