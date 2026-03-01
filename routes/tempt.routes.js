const express = require("express");
const router = express.Router();
const temptController = require("../controllers/tempt.controller");

router.get("/", temptController.getAllTempt);
router.get("/:id", temptController.getTemptById);
router.post("/", temptController.addTempt);
router.put("/:id", temptController.updateTempt);
router.delete("/:id", temptController.deleteTempt);

module.exports = router;