const db = require("../config/db");

// Get All Payment Types
exports.getAllPaymentTypes = (req, res) => {
  const sql = "SELECT * FROM paymenttype";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// Get Payment Type By ID
exports.getPaymentTypeById = (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM paymenttype WHERE paytyid = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0)
      return res.status(404).json({ message: "Payment Type not found" });
    res.json(result[0]);
  });
};

// Add Payment Type
exports.addPaymentType = (req, res) => {
  const { payid, paytypename } = req.body;
  const sql = "INSERT INTO paymenttype (payid, paytypename) VALUES (?, ?)";
  db.query(sql, [payid, paytypename], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Payment Type added", id: result.insertId });
  });
};

// Update Payment Type
exports.updatePaymentType = (req, res) => {
  const { id } = req.params;
  const { payid, paytypename } = req.body;

  const sql =
    "UPDATE paymenttype SET payid = ?, paytypename = ? WHERE paytyid = ?";
  db.query(sql, [payid, paytypename, id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Payment Type updated successfully" });
  });
};

// Delete Payment Type
exports.deletePaymentType = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM paymenttype WHERE paytyid = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Payment Type deleted successfully" });
  });
};