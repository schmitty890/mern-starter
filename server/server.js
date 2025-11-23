import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import StringModel from './models/String.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));

// API Routes
app.post('/api/strings', async (req, res) => {
  try {
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({ error: 'String value is required' });
    }
    console.log(value);
    const newString = new StringModel({ value });
    await newString.save();

    res.status(201).json({
      message: 'String saved successfully',
      data: newString,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all strings (optional - for testing)
app.get('/api/strings', async (req, res) => {
  try {
    const strings = await StringModel.find().sort({ createdAt: -1 });
    res.json(strings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
