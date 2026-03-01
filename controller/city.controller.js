const db = require("../config/db")

// Get All City with State and Country
function getAllCity(req, res) {
    const sql = `
        SELECT city.ctid, city.cityname,
               state.sname,
               country.cname
        FROM city
        INNER JOIN state ON city.sid = state.sid
        INNER JOIN country ON state.cid = country.cid
    `

    db.query(sql, (err, result) => {
        if (err) return res.status(500).json(err)
        return res.json(result)
    })
}

// Get City By ID
function getCityById(req, res) {
    const { ctid } = req.params

    const sql = `
        SELECT city.ctid, city.cityname,
               state.sname,
               country.cname
        FROM city
        INNER JOIN state ON city.sid = state.sid
        INNER JOIN country ON state.cid = country.cid
        WHERE city.ctid = ?
    `

    db.query(sql, [ctid], (err, result) => {
        if (err) return res.status(500).json(err)
        if (result.length === 0)
            return res.json({ message: "No record found" })
        return res.json(result)
    })
}

// Add City
function addCity(req, res) {
    const { sid, cityname } = req.body

    const sql = "INSERT INTO city (sid, cityname) VALUES (?, ?)"

    db.query(sql, [sid, cityname], (err, result) => {
        if (err) return res.status(500).json(err)
        return res.json({ message: "City added successfully" })
    })
}

// Delete City
function deleteCity(req, res) {
    const { ctid } = req.params

    db.query("DELETE FROM city WHERE ctid = ?", [ctid], (err, result) => {
        if (err) return res.status(500).json(err)
        return res.json({ message: "City deleted successfully" })
    })
}

module.exports = {
    getAllCity,
    getCityById,
    addCity,
    deleteCity
}