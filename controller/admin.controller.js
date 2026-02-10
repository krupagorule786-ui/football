const db=require("../config/db")
//api code
exports.getAll=(req,res)=>{
    /*writing query*/
    db.query("select * from admin",(err,result)=>{
       if(err) {
          return res.status(500).json(err)
       }
     return res.json(result)
 })
}