const express = require("express");
const router = express.Router();
const admcontroller=require("../controller/admin.controller");
//define endpoint
router.post('/',admcontroller.check)
module.exports=router;  