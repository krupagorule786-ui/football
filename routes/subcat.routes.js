const express = require("express")
const router = express.Router()
const subcategoryController = require("../controller/subcat.controller")

router.get("/", subcategoryController.getAllSubCategory)
router.get("/:subcatid", subcategoryController.getSubCategoryById)
router.post("/", subcategoryController.addSubCategory)
router.delete("/:subcatid", subcategoryController.deleteSubCategory)

module.exports = router