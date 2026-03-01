const db = require("../config/db");

// Get All Feedback
exports.getAllFeedback = (req, res) => {
  const sql = "SELECT * FROM feedback";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// Get Feedback By ID
exports.getFeedbackById = (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM feedback WHERE fid = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0)
      return res.status(404).json({ message: "Feedback not found" });
    res.json(result[0]);
  });
};

// Add Feedback
exports.addFeedback = (req, res) => {
  const { uid, message } = req.body;
  const sql = "INSERT INTO feedback (uid, message) VALUES (?, ?)";
  db.query(sql, [uid, message], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Feedback added", id: result.insertId });
  });
};

// Update Feedback
exports.updateFeedback = (req, res) => {
  const { id } = req.params;
  const { uid, message } = req.body;

  const sql = "UPDATE feedback SET uid = ?, message = ? WHERE fid = ?";
  db.query(sql, [uid, message, id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Feedback updated successfully" });
  });
};

// Delete Feedback
exports.deleteFeedback = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM feedback WHERE fid = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Feedback deleted successfully" });
  });
};