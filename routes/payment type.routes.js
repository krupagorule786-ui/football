const express = require("express");
const router = express.Router();
const paymentTypeController = require("../controllers/paymentType.controller");

router.get("/", paymentTypeController.getAllPaymentTypes);
router.get("/:id", paymentTypeController.getPaymentTypeById);
router.post("/", paymentTypeController.addPaymentType);
router.put("/:id", paymentTypeController.updatePaymentType);
router.delete("/:id", paymentTypeController.deletePaymentType);

module.exports = router;