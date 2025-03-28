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
