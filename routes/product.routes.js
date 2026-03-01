const express = require("express")
const router = express.Router()
const productController = require("../controller/product.controller")

router.get("/", productController.getAllProduct)
router.post("/", productController.addProduct)

module.exports = router