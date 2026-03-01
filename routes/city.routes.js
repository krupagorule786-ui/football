const express = require("express")
const router = express.Router()
const cityController = require("../controller/city.controller")

router.get("/", cityController.getAllCity)
router.get("/:ctid", cityController.getCityById)
router.post("/", cityController.addCity)
router.delete("/:ctid", cityController.deleteCity)

module.exports = router