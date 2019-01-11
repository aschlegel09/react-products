const router = require("express").Router();
const productRoutes = require("./product");

// Product routes
router.use("/products", productRoutes);

module.exports = router;
