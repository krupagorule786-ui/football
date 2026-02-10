const express = require("express");
const router = express.Router();
const catcontroller=require("../controller/cat.controller");
//define endpoint
router.get('/',catcontroller.getAll)
router.get('/:id',catcontroller.getcatById)
router.post('/',catcontroller.addcat)
module.exports=router
