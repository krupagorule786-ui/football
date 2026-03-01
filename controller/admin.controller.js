const db=require("../config/db")

function getAll(req,res)
{
    db.query("select * from admin",
      (err,result)=>{
      if(err)
         return res.status(500).json(err)
      return res.json(result)
      })
    
}
 
function getadById(req,res)
{
   const{id}=req.params
   db.query("select*from admin where id=?"),
   [id],
    (err,result)=>{
      if(err)
         return res.status(500).json(err)
      if(result.length==0)
         return res.json({message:"no record found"})
      return res.json(result)
      }
}
function check(req,res){
   const{ email,password}=req.body;
    
   db.query("select * from admin where email=? and password=?",
      [email,password],
      (err,result)=>{
         if(err){
            return res.status(500).json(err);
         }
      if(result.length==0){
         return res.json({message:false});
         }else{
            return res.json({message:true});
         }
      }
   );
}


module.exports={
   getAll,
   getadById,
   check
}