import db from "../../utils/database.js";

// Get all items
export const getAllItems = (req, res) => {
  const sql = "SELECT * FROM items";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Get a single item by ID
export const getItemById = (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM items WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0)
      return res.status(404).json({ error: "Item not found" });
    res.json(results[0]);
  });
};

// Create a new item
export const createItem = (req, res) => {
  const {
    item_name,
    item_price,
    item_category,
    item_description,
    item_img_url,
  } = req.body;
  const sql =
    "INSERT INTO items (item_name, item_price, item_category, item_description, item_img_url) VALUES (?, ?, ?, ?, ?)";
  db.query(
    sql,
    [item_name, item_price, item_category, item_description, item_img_url],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({
        message: "Item created successfully",
        itemId: result.insertId,
      });
    }
  );
};

// Update an item by ID
export const updateItemById = (req, res) => {
  const { id } = req.params;
  const {
    item_name,
    item_price,
    item_category,
    item_description,
    item_img_url,
  } = req.body;
  const sql =
    "UPDATE items SET item_name = ?, item_price = ?, item_category = ?, item_description = ?, item_img_url = ? WHERE id = ?";
  db.query(
    sql,
    [item_name, item_price, item_category, item_description, item_img_url, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0)
        return res.status(404).json({ error: "Item not found" });
      res.json({ message: "Item updated successfully" });
    }
  );
};

// Delete an item by ID
export const deleteItemById = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM items WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item deleted successfully" });
  });
};