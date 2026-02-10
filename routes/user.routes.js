const express = require("express");
const router = express.Router();
const usercontroller=require("../controller/user.controller");
//define endpoint
router.get('/',usercontroller.getAll)
router.get('/:id',usercontroller.getById)
router.post('/',usercontroller.add)
module.exports=router;
