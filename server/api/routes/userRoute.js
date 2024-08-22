import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  loginUser,
  logoutUser,
} from "../controllers/userController.js";

const router = express.Router();

// Get all users
router.get("/users", getAllUsers);

// Get a single user by ID
router.get("/users/:id", getUserById);

// Create a new user
router.post("/users", createUser);

// Update a user by ID
router.put("/users/:id", updateUserById);

// Delete a user by ID
router.delete("/users/:id", deleteUserById);

// Login
router.post("/login", loginUser);

// Logout
router.post("/logout", logoutUser);

export default router;
