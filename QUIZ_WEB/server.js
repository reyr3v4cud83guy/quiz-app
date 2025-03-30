const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/biologyQuiz", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Define a schema
const responseSchema = new mongoose.Schema({
  name: String,
  email: String,
  q1: String,
  q2: String,
  q3: String,
  q4: String,
  q5: String,
  q6: String,
  q7: String,
  q8: String,
  q9: String,
  q10: String,
});

// Create a model
const Response = mongoose.model("Response", responseSchema);

// POST endpoint to submit responses
app.post("/submit", async (req, res) => {
  try {
    const newResponse = new Response(req.body);
    await newResponse.save();
    res.json({ success: true, message: "Response saved successfully!" });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});
// Handle 500 errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});
// Export the app for testing purposes
module.exports = app;
// Add a simple GET endpoint for testing
app.get("/", (req, res) => {
  res.send("Welcome to the Biology Quiz API!");
});
// Add a simple GET endpoint to fetch all responses
app.get("/responses", async (req, res) => {
  try {
    const responses = await Response.find();
    res.json(responses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Add a simple GET endpoint to fetch a specific response by ID
