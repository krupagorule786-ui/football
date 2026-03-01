const db = require("../config/db");

// Get All Payments
exports.getAllPayments = (req, res) => {
  const sql = "SELECT * FROM payment";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// Get Payment By ID
exports.getPaymentById = (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM payment WHERE payid = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0)
      return res.status(404).json({ message: "Payment not found" });
    res.json(result[0]);
  });
};

// Add Payment
exports.addPayment = (req, res) => {
  const { oid, paymenttype } = req.body;
  const sql = "INSERT INTO payment (oid, paymenttype) VALUES (?, ?)";
  db.query(sql, [oid, paymenttype], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Payment added successfully", id: result.insertId });
  });
};

// Update Payment
exports.updatePayment = (req, res) => {
  const { id } = req.params;
  const { oid, paymenttype } = req.body;

  const sql = "UPDATE payment SET oid = ?, paymenttype = ? WHERE payid = ?";
  db.query(sql, [oid, paymenttype, id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Payment updated successfully" });
  });
};

// Delete Payment
exports.deletePayment = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM payment WHERE payid = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Payment deleted successfully" });
  });
};