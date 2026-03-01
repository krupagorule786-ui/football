const db = require("../db");

// Get All Orders
exports.getAllOrders = (req, res) => {
  db.query("SELECT * FROM orders", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// Get Order By ID
exports.getOrderById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM orders WHERE oid = ?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0)
      return res.status(404).json({ message: "Order not found" });

    res.json(result[0]);
  });
};

// Add Order
exports.addOrder = (req, res) => {
  const { uid, proid, proquantity, date } = req.body;

  const sql =
    "INSERT INTO orders (uid, proid, proquantity, date) VALUES (?, ?, ?, ?)";

  db.query(sql, [uid, proid, proquantity, date], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Order created", oid: result.insertId });
  });
};

// Update Order
exports.updateOrder = (req, res) => {
  const { id } = req.params;
  const { uid, proid, proquantity, date } = req.body;

  const sql =
    "UPDATE orders SET uid=?, proid=?, proquantity=?, date=? WHERE oid=?";

  db.query(sql, [uid, proid, proquantity, date, id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Order updated" });
  });
};

// Delete Order
exports.deleteOrder = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM orders WHERE oid=?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Order deleted" });
  });
};