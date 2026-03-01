/*
const db=require("../config/db")
//api code
function getAll(req,res)
{
    //writing query
    db.query("select * from state",(err,result)=>
      {
       if(err) 
          return res.status(500).json(err)
      return res.json(result)
      })
}
function getById(req,res)
{
    const {id}=req.params
    db.query("select*from state where sid=?",
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
     const {sname}=req.body
    db.query("insert into state(sname)values(?)",
        [sname],
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
*/
const db = require("../config/db")

// Get All State with Country Name
function getAllState(req, res) {
    const sql = `
        SELECT state.sid, state.sname, country.cname
        FROM state
        INNER JOIN country ON state.cid = country.cid
    `
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json(err)
        return res.json(result)
    })
}

// Get State By ID with Country
function getStateById(req, res) {
    const { sid } = req.params

    const sql = `
        SELECT state.sid, state.sname, country.cname
        FROM state
        INNER JOIN country ON state.cid = country.cid
        WHERE state.sid = ?
    `

    db.query(sql, [sid], (err, result) => {
        if (err) return res.status(500).json(err)
        if (result.length === 0)
            return res.json({ message: "No record found" })
        return res.json(result)
    })
}

// Add State
function addState(req, res) {
    const { cid, sname } = req.body

    const sql = "INSERT INTO state (cid, sname) VALUES (?, ?)"

    db.query(sql, [cid, sname], (err, result) => {
        if (err) return res.status(500).json(err)
        return res.json({ message: "State added successfully" })
    })
}

// Delete State
function deleteState(req, res) {
    const { sid } = req.params

    db.query("DELETE FROM state WHERE sid = ?", [sid], (err, result) => {
        if (err) return res.status(500).json(err)
        return res.json({ message: "State deleted successfully" })
    })
}

module.exports = {
    getAllState,
    getStateById,
    addState,
    deleteState
}