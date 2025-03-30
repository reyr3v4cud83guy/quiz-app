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
  name: String,
  email: String,
  q1_1: String,
  q1_2: String,
  q1_3: String,
  q1_4: String,
  q1_5: String,
  q1_6: String,
  q1_7_1: String,
  q1_7_2: String,
  q1_8: String,
  q1_9: String,
  q2_1: String,
  q2_2: String,
  q2_3: String,
  q2_4_1: String,
  q2_4_2: String,
  q2_5: String,
  q2_6: String,
  q2_7: String,
  q3_1: String,
  q3_2: String,
  q3_3_1: String,
  q3_3_2: String,
  q3_4: String,
  q3_5: String,
  q3_6: String,
  q3_7: String,
  q3_8: String,
  q3_9: String,
  q4_1_1: String,
  q4_1_2: String,
  q4_2: String,
  q4_3: String,
  q4_4: String,
  q4_5: String,
  q4_6: String,
  q4_7: String,
  q4_8: String,
  q4_9: String,
  q5_1: String,
  q5_2_1: String,
  q5_2_2: String,
  q5_2_3: String,
  q5_3: String,
  q5_4_1: String,
  q5_4_2: String,
  q5_4_3: String,
  q5_5: String,
  q5_6: String,
  q5_7: String,
  q6_1: String,
  q6_2: String,
  q6_3: String,
  q6_4_independent: String,
  q6_4_dependent: String,
  q6_5: String,
  q6_6: String,
  q6_7: String,
  q6_8: String,
  q6_9: String,
  graph_question: String,
});

// Create a model
const Response = mongoose.model("Response", responseSchema);

// POST endpoint to submit responses
app.post("/submit", (req, res) => {
  const newResponse = new Response(req.body);
  newResponse
    .save()
    .then(() => res.json({ message: "Response saved successfully!" }))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
