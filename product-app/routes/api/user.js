const router = require("express").Router();
const userController = require("../../controllers/userController.js");
// const User = require("../../models/User");

// Matches with "/api/profile"
router.route("/")
  .get(userController.findAll)

// Matches with "/api/profile/:id"
router
  .route("/:id")
  .get(userController.findById)

// router
//   .route("/add")
//   .post(function (req, res) {
//     let user = new User(req.body);
//     user.save()
//       .then(user => {
//         res.status(200).json({ 'user': 'user added successfully' });
//       })
//       .catch
//   })

router
  .route("/add")
  .post(userController.create);

module.exports = router;
