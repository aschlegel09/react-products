const router = require("express").Router();
const userController = require("../../controllers/userController.js");

// Matches with "/api/profile"
router.route("/")
  .get(userController.findAll)

  // Matches with "/api/profile/:id"
router
  .route("/:id")
  .get(userController.findById)

  module.exports = router;
