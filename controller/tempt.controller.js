const db = require("../db");

// Get All Tempt
exports.getAllTempt = (req, res) => {
  db.query("SELECT * FROM tempt", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// Get Tempt By ID
exports.getTemptById = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM tempt WHERE tid=?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0)
      return res.status(404).json({ message: "Tempt not found" });

    res.json(result[0]);
  });
};

// Add Tempt
exports.addTempt = (req, res) => {
  const { uid, proid, proquantity } = req.body;

  const sql =
    "INSERT INTO tempt (uid, proid, proquantity) VALUES (?, ?, ?)";

  db.query(sql, [uid, proid, proquantity], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Tempt added", tid: result.insertId });
  });
};

// Update Tempt
exports.updateTempt = (req, res) => {
  const { id } = req.params;
  const { uid, proid, proquantity } = req.body;

  const sql =
    "UPDATE tempt SET uid=?, proid=?, proquantity=? WHERE tid=?";

  db.query(sql, [uid, proid, proquantity, id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Tempt updated" });
  });
};

// Delete Tempt
exports.deleteTempt = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM tempt WHERE tid=?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Tempt deleted" });
  });
};