const db = require("../config/db")

// Get All Product (Join with SubCategory)
function getAllProduct(req,res){
    const sql = `
    SELECT product.proid,
           product.proname,
           product.proprice,
           subcategory.subcatname
    FROM product
    INNER JOIN subcategory
    ON product.subcatid = subcategory.subcatid
    `
    db.query(sql,(err,result)=>{
        if(err) return res.status(500).json(err)
        res.json(result)
    })
}

// Add Product
function addProduct(req,res){
    const {subcatid,proname,propic,prodescription,proprice,
           createdBy,createdOn,updatedBy,updatedOn,isActive} = req.body

    const sql = `
    INSERT INTO product
    (subcatid,proname,propic,prodescription,proprice,
     createdBy,createdOn,updatedBy,updatedOn,isActive)
    VALUES (?,?,?,?,?,?,?,?,?,?)
    `

    db.query(sql,
    [subcatid,proname,propic,prodescription,proprice,
     createdBy,createdOn,updatedBy,updatedOn,isActive],
     (err,result)=>{
         if(err) return res.status(500).json(err)
         res.json({message:"Product added successfully"})
     })
}

module.exports = {
    getAllProduct,
    addProduct,

}