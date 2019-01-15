'use strict';

require('./mongoose.js');
const passport = require("passport");
const FacebookTokenStrategy = require('passport-facebook-token');
const GoogleTokenStrategy = require('passport-google-token').Strategy;
// const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
// const FacebookStrategy = require("passport-facebook");
const User = require("../../../models");
const config = require("../config.json");

passport.serializeUser(function(user, done) {
 done(null, user);
});

passport.deserializeUser(function(user, done) {
 done(null, user);
});

passport.use(
    new FacebookTokenStrategy(
        {
    clientID: config.FACEBOOK_APP_ID,
    clientSecret: config.fbSecret
    // callbackURL: config.fbCallbackUrl
  },
  function(accessToken, refreshToken, profile, done) {
    User.upsertFbUser(accessToken, refreshToken, profile,
        function(err, user) {
            return done(err, user);
        });
  }));

passport.use(
 new GoogleTokenStrategy(
  {
   clientID: config.GOOGLE_CLIENT_ID,
   clientSecret: config.GOOGLE_CLIENT_SECRET
//    callbackURL: config.googleCallbackUrl
  },
  function(accessToken, refreshToken, profile, done) {
   User.upsertGoogleUser(accessToken, refreshToken, profile,
    function(err, user) {
        return done (err, user);
    });
}));

module.exports = passport;