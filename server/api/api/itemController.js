import db from "../../utils/database.js";

// Get all items
export const getAllItems = (req, res) => {
  const sql = "SELECT * FROM items";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};