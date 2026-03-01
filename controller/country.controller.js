const db = require("../config/db")

// Get All Countries
function getAllCountry(req,res){
    db.query("select * from country",(err,result)=>{
        if(err) return res.status(500).json(err)
        return res.json(result)
    })
}

// Get Country By Id
function getCountryById(req,res){
    const {cid} = req.params
    db.query("select * from country where cid=?",[cid],(err,result)=>{
        if(err) return res.status(500).json(err)
        if(result.length==0) return res.json({message:"No record found"})
        return res.json(result)
    })
}

// Add Country
function addCountry(req,res){
    const {cname} = req.body
    db.query("insert into country(cname) values(?)",[cname],(err,result)=>{
        if(err) return res.status(500).json(err)
        return res.json({message:"Country added successfully"})
    })
}

// Delete Country
function deleteCountry(req,res){
    const {cid} = req.params
    db.query("delete from country where cid=?",[cid],(err,result)=>{
        if(err) return res.status(500).json(err)
        return res.json({message:"Country deleted successfully"})
    })
}

module.exports = {
    getAllCountry,
    getCountryById,
    addCountry,
    deleteCountry
}