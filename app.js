const express = require("express");
const app = express();
const api = require("./routes/api");
const connectDb = require("./DB/connectDB");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const dotenv = require("dotenv");

// Path to dotenv
dotenv.config({ path: ".env" });

// Enable CORS
app.use(cors());

// Middleware for JSON body parsing
app.use(express.json());

// Middleware for URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Temp files uploader
app.use(fileUpload({ useTempFiles: true }));

// Use API routes
app.use("/api", api);

// Connect to the database
connectDb();

// Start the server
app.listen(process.env.PORT, () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`)
);
