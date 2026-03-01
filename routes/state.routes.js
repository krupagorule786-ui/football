/*const express = require("express");
const router = express.Router();
const scontroller=require("../controller/state.controller");
//define endpoint
router.get('/',scontroller.getAll)
router.get('/',scontroller.getById)
router.get('/',scontroller.add)

module.exports=router;
*/
const express = require("express")
const router = express.Router()
const stateController = require("../controller/state.controller")

router.get("/", stateController.getAllState)
router.get("/:sid", stateController.getStateById)
router.post("/", stateController.addState)
router.delete("/:sid", stateController.deleteState)

module.exports = router