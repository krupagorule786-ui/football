const express = require("express")
const router = express.Router()
const categoryController = require("../controller/cat.controller")

router.get("/", categoryController.getAllCategory)
router.get("/:catid", categoryController.getCategoryById)
router.post("/", categoryController.addCategory)
router.delete("/:catid", categoryController.deleteCategory)

module.exports = router