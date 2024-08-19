import dotenv from "dotenv";
dotenv.config();
import db_connect from "./utils/database.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import expressWs from "express-ws";

// Import routes
// import itemRoutes from "./api/routes/itemRoutes.js";
// import userRoutes from "./api/routes/userRoutes.js";

// Initialize Express
const app = express();
const server = http.createServer(app);
expressWs(app, server);
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Enable CORS
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

// Connect to MySQL database
db_connect.connect((err) => {
  if (err) {
    console.log("Error connecting to the database:", err.message);
    return;
  }
  console.log("Database connected:", db_connect.threadId);
});

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Restaurant Commerce Shop API");
});

// Use the routes
// app.use("/api", itemRoutes);
// app.use("/api", userRoutes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  console.log(`404 - Not Found - ${req.method} ${req.url}`);
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handler for sending JSON responses
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message,
    error: process.env.NODE_ENV !== "production" ? err : {},
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
