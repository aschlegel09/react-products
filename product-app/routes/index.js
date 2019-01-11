const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const { generateToken, sendToken } = require('../client/src/utils/token.utils');

// API Routes
router.use("/api", apiRoutes || '/api/v1', apiRoutes);

// make it client/build/index when in production
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
