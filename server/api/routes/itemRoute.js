import express from "express";
import {
  getAllItems,
  getItemById,
  createItem,
  updateItemById,
  deleteItemById,
} from "../controllers/itemController.js";

const router = express.Router();

// Get all items
router.get("/items", getAllItems);

// Get a single item by ID
router.get("/items/:id", getItemById);

// Create a new item
router.post("/items", createItem);

// Update an item by ID
router.put("/items/:id", updateItemById);

// Delete an item by ID
router.delete("/items/:id", deleteItemById);

export default router;