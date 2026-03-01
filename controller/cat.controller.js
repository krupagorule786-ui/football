const db = require("../config/db")

// Get All Category
function getAllCategory(req, res){
    db.query("SELECT * FROM category", (err, result)=>{
        if(err) return res.status(500).json(err)
        res.json(result)
    })
}

// Get Category By Id
function getCategoryById(req, res){
    const { catid } = req.params
    db.query("SELECT * FROM category WHERE catid=?", [catid], (err, result)=>{
        if(err) return res.status(500).json(err)
        if(result.length===0)
            return res.json({message:"No record found"})
        res.json(result)
    })
}

// Add Category
function addCategory(req, res){
    const {catname,catpic,createdBy,createdOn,updatedBy,updatedOn,isActive} = req.body

    const sql = `INSERT INTO category
    (catname,catpic,createdBy,createdOn,updatedBy,updatedOn,isActive)
    VALUES (?,?,?,?,?,?,?)`

    db.query(sql,
        [catname,catpic,createdBy,createdOn,updatedBy,updatedOn,isActive],
        (err,result)=>{
            if(err) return res.status(500).json(err)
            res.json({message:"Category added successfully"})
        })
}

// Delete Category
function deleteCategory(req,res){
    const { catid } = req.params
    db.query("DELETE FROM category WHERE catid=?", [catid], (err,result)=>{
        if(err) return res.status(500).json(err)
        res.json({message:"Category deleted successfully"})
    })
}

module.exports = {
    getAllCategory,
    getCategoryById,
    addCategory,
    deleteCategory
}