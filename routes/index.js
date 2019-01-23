const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// const passport = require("passport");

// const { generateToken, sendToken } = require('../client/src/utils/token.utils.js');
// require('../client/src/utils/passport.js');
// C:\Users\aschl\Desktop\bootcamp\react-products\product-app\client\src\utils\token.utils.js

// API Routes
router.use("/api", apiRoutes);

// router.route('auth/facebook').post(passport.authenticate('facebook-token', {session: false}), function(req, res, next) {
//   if(!req.user) {
//     return res.send(401, 'User Not Authenticated');
//   }
//   req.auth = {
//     id: req.user.id
//   };

//   next();
// }, generateToken, sendToken);

// router.route('/auth/google').post(passport.authenticate('google-token', {session: false}), function(req, res, next) {
//   if(!req.user) {
//     return res.send(401, 'User Not Authenticated');
//   }
//   req.auth = {
//     id: req.user.id
//   };

//   next();
// }, generateToken, sendToken);

/* GET Google Authentication API. */
// router.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );
// router.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/", session: false }),
//   function (req, res) {
//     var token = req.user.token;
//     res.redirect("http://localhost:3001?token=" + token);
//   }
// );

// make it client/build/index when in production
// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
