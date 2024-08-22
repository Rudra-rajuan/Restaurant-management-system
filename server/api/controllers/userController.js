import db from "../../utils/database.js";
import jwt from "jsonwebtoken";

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET;

// Login a user
export const loginUser = (req, res) => {
  const { user_email, user_password } = req.body;

  // Check if the user exists
  const sql = "SELECT * FROM users WHERE user_email = ?";
  db.query(sql, [user_email], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0)
      return res.status(404).json({ error: "User not found" });

    const user = results[0];

    // Directly compare the entered password with the stored password
    if (user_password !== user.user_password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user.id, user_email: user.user_email },
      JWT_SECRET,
      {
        expiresIn: "1h", // Token expires in 1 hour
      }
    );

    res.json({ message: "Login successful", token });
  });
};

// Logout a user
export const logoutUser = (req, res) => {
  // handled client-side by removing the token.
  res.json({ message: "Logout successful" });
};

// Register (Create a new user)
export const createUser = (req, res) => {
  const { user_name, user_password, user_email } = req.body;

  const sql =
    "INSERT INTO users (user_name, user_password, user_email) VALUES (?, ?, ?)";
  db.query(sql, [user_name, user_password, user_email], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({
      message: "User created successfully",
      userId: result.insertId,
    });
  });
};

// Get all users
export const getAllUsers = (req, res) => {
  const sql = "SELECT id, user_name, user_email, created_at FROM users";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Get a single user by ID
export const getUserById = (req, res) => {
  const { id } = req.params;
  const sql =
    "SELECT id, user_name, user_email, created_at FROM users WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0)
      return res.status(404).json({ error: "User not found" });
    res.json(results[0]);
  });
};

// Update a user by ID
export const updateUserById = (req, res) => {
  const { id } = req.params;
  const { user_name, user_password, user_email } = req.body;
  const sql =
    "UPDATE users SET user_name = ?, user_password = ?, user_email = ? WHERE id = ?";
  db.query(sql, [user_name, user_password, user_email, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "User not found" });
    res.json({ message: "User updated successfully" });
  });
};

// Delete a user by ID
export const deleteUserById = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM users WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "User not found" });
    res.json({ message: "User deleted successfully" });
  });
};
