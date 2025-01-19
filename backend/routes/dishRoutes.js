const express = require('express');
const Dish = require('../models/dish');
const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id).populate('ingredients');
    res.json(dish);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching dish' });
  }
});

router.post('/', async (req, res) => {
  const { name, ingredients } = req.body;
  try {
    const newDish = new Dish({ name, ingredients });
    await newDish.save();
    res.status(201).json(newDish);
  } catch (error) {
    res.status(500).json({ error: 'Error adding dish' });
  }
});

router.get('/dish/:id', async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id).populate('ingredients');
    res.json(dish);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching dish details' });
  }
});

module.exports = router;
