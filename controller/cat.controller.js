const db=require("../config/db")
//api code
/*exports.getAll=(req,res)=>{
    //writing query
    db.query("select * from admin",(err,result)=>{
       if(err) {
          return res.status(500).json(err)
       }
     return res.json(result)
 })
}*/
function getAll(req,res)
{
 db.query("select*from cat",
    (err,result)=>{
        if(err)
            return res.status(500).json(err)
        return res.json(result)
        })
}
function getcatById(req,res)
{
    const {id}=req.params
    db.query("select*from cat where catid=?",
        [id],
    (err,result)=>{
        if(err)
            return res.status(500).json(err)
        if(result.length==0)
            return res.json({message:"No record found"})
        return res.json(result)
        })

}
function addcat(req,res)
{
     const {catname}=req.body
    db.query("insert into cat(catname)values(?)",
        [catname],
    (err,result)=>{
        if(err)
            return res.status(500).json(err)
            return res.json({message:"Record inserted sucessfully"})
        })
}
module.exports={
    getAll,
    getcatById,
    addcat
}