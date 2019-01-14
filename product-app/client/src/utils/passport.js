const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const FacebookStrategy = require("passport-facebook");
const User = require("../../../models");

passport.serializeUser(function(user, done) {
 done(null, user);
});

passport.deserializeUser(function(user, done) {
 done(null, user);
});

var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/User');

passport.use(
    new FacebookStrategy(
        {
    // clientID: process.env.,
    // clientSecret: "0d641e47f5d55af221ec80346f3f2d43",
    // callbackURL: "http://127.0.0.1:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(
        {name: profile.displayName}, 
        {name: profile.displayName,userid: profile.id}, 
        function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

passport.use(
 new GoogleStrategy(
  {
   clientID: process.env.GOOGLE_CLIENT_ID,
   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
   callbackURL: "http://localhost:3001/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   var userData = {
    email: profile.emails[0].value,
    name: profile.displayName,
    token: accessToken
   };
   done(null, userData);
  }
 )
);

module.exports = passport;