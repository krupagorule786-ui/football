const db = require("../config/db")

// Get Wishlist (Join Product)
function getAllWishlist(req,res){
    const sql = `
    SELECT wishlist.wid,
           product.proname,
           product.proprice
    FROM wishlist
    INNER JOIN product
    ON wishlist.proid = product.proid
    `
    db.query(sql,(err,result)=>{
        if(err) return res.status(500).json(err)
        res.json(result)
    })
}

// Add Wishlist
function addWishlist(req,res){
    const {proid,createdBy,createdOn,updatedBy,updatedOn,isActive} = req.body

    const sql = `
    INSERT INTO wishlist
    (proid,createdBy,createdOn,updatedBy,updatedOn,isActive)
    VALUES (?,?,?,?,?,?)
    `

    db.query(sql,
    [proid,createdBy,createdOn,updatedBy,updatedOn,isActive],
    (err,result)=>{
        if(err) return res.status(500).json(err)
        res.json({message:"Wishlist added successfully"})
    })
}

module.exports = {
    getAllWishlist,
    addWishlist
}