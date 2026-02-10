const express = require("express");
const router = express.Router();
const adcontroller=require("../controller/admin.controller");
//define endpoint
router.get('/',adcontroller.getAll)
module.exports=router;