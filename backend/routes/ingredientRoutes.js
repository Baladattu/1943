const express = require('express');
const Ingredient = require('../models/Ingredient');
const router = express.Router();

router.get('/:name', async (req, res) => {
  try {
    const ingredient = await Ingredient.find(req.params);
    res.json(ingredient);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching ingredient' });
  }
});

router.post('/', async (req, res) => {
  const { name, calories, quantity } = req.body;
  try {
    const newIngredient = new Ingredient({ name, calories, quantity });
    await newIngredient.save();
    res.status(201).json(newIngredient);
  } catch (error) {
    res.status(500).json({ error: 'Error adding ingredient' });
  }
});

router.put('/:id', async (req, res) => {
  const { name, calories, quantity } = req.body;
  try {
    const updatedIngredient = await Ingredient.findByIdAndUpdate(req.params.id, { name, calories, quantity }, { new: true });
    res.json(updatedIngredient);
  } catch (error) {
    res.status(500).json({ error: 'Error updating ingredient' });
  }
});

router.get('/', async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching ingredients' });
  }
});

module.exports = router;