import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/biologyQuiz", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema
const responseSchema = new mongoose.Schema({
  userId: String,
  answers: [
    {
      questionId: String,
      answer: String,
    },
  ],
  submittedAt: { type: Date, default: Date.now },
});

// Create a model
const Response = mongoose.model("Response", responseSchema);

// POST endpoint to submit responses
app.post("/submit", async (req, res) => {
  try {
    const { userId, answers } = req.body;

    if (!userId || !Array.isArray(answers)) {
      return res.status(400).json({ error: "Invalid request data" });
    }

    const newResponse = new Response({ userId, answers });
    await newResponse.save();
    res.json({ message: "Response saved successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
