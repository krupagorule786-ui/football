const express = require("express");
const router = express.Router();
const cncontroller=require("../controller/country.controller");
//define endpoint
router.get('/',cncontroller.getAll)
module.exports=router;