const db = require("../config/db")

// Get All SubCategory with Category name
function getAllSubCategory(req,res){
    const sql = `
    SELECT subcategory.subcatid,
           subcategory.subcatname,
           subcategory.subcatpic,
           subcategory.isActive,
           category.catname
    FROM subcategory
    INNER JOIN category
    ON subcategory.catid = category.catid
    `

    db.query(sql,(err,result)=>{
        if(err) return res.status(500).json(err)
        res.json(result)
    })
}

// Get SubCategory By Id
function getSubCategoryById(req,res){
    const { subcatid } = req.params

    const sql = `
    SELECT subcategory.subcatid,
           subcategory.subcatname,
           category.catname
    FROM subcategory
    INNER JOIN category
    ON subcategory.catid = category.catid
    WHERE subcategory.subcatid = ?
    `

    db.query(sql,[subcatid],(err,result)=>{
        if(err) return res.status(500).json(err)
        if(result.length===0)
            return res.json({message:"No record found"})
        res.json(result)
    })
}

// Add SubCategory
function addSubCategory(req,res){
    const {catid,subcatname,subcatpic,createdBy,createdOn,updatedBy,updatedOn,isActive} = req.body

    const sql = `
    INSERT INTO subcategory
    (catid,subcatname,subcatpic,createdBy,createdOn,updatedBy,updatedOn,isActive)
    VALUES (?,?,?,?,?,?,?,?)
    `

    db.query(sql,
        [catid,subcatname,subcatpic,createdBy,createdOn,updatedBy,updatedOn,isActive],
        (err,result)=>{
            if(err) return res.status(500).json(err)
            res.json({message:"SubCategory added successfully"})
        })
}

function deleteSubCategory(req,res){
    const { subcatid } = req.params
    db.query("DELETE FROM subcategory WHERE subcatid=?",
    [subcatid],(err,result)=>{
        if(err) return res.status(500).json(err)
        res.json({message:"SubCategory deleted successfully"})
    })
}

module.exports = {
    getAllSubCategory,
    getSubCategoryById,
    addSubCategory,
    deleteSubCategory
}