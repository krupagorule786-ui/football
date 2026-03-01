const express = require("express")
const router = express.Router()
const wishlistController = require("../controller/wishlist.controller")

router.get("/", wishlistController.getAllWishlist)
router.post("/", wishlistController.addWishlist)

module.exports = router