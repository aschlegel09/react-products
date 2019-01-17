const router = require("express").Router();
const productRoutes = require("./product");
const userRoutes = require("./user");

// Product routes
router.use("/products", productRoutes);
router.use("/profile", userRoutes)

module.exports = router;
