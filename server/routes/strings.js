import express from 'express';
import StringModel from '../models/String.js';

const router = express.Router();

// POST - Create a new string
router.post('/', async (req, res) => {
  try {
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({ error: 'String value is required' });
    }
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

// GET - Get all strings
router.get('/', async (req, res) => {
  try {
    const strings = await StringModel.find().sort({ createdAt: -1 });
    res.json(strings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
