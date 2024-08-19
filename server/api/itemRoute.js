import express from "express";
import {
  getAllItems,
} from "../controllers/itemController.js";

const router = express.Router();

// Get all items
router.get("/items", getAllItems);

export default router;