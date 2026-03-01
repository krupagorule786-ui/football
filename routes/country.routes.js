const express = require("express")
const router = express.Router()
const countryController = require("../controller/country.controller")

router.get("/", countryController.getAllCountry)
router.get("/:cid", countryController.getCountryById)
router.post("/", countryController.addCountry)
router.delete("/:cid", countryController.deleteCountry)

module.exports = router