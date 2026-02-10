const db=require("../config/db")
function getAll(req,res)
{
 db.query("select*from user",
    (err,result)=>{
        if(err)
            return res.status(500).json(err)
        return res.json(result)
        })
}
function getById(req,res)
{
    const {id}=req.params
    db.query("select*from user where uid=?",
        [id],
    (err,result)=>{
        if(err)
            return res.status(500).json(err)
        if(result.length==0)
            return res.json({message:"No record found"})
        return res.json(result)
        })

}

function add(req,res)
{
     const {fname}=req.body
    db.query("insert into user(fname)values(?)",
        [fname],
    (err,result)=>{
        if(err)
            return res.status(500).json(err)
            return res.json({message:"Record inserted sucessfully"})
        })
}

module.exports={
    getAll,
   getById,
    add
}