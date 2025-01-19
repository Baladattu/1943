const mongoose = require('mongoose');
const DishSchema = new mongoose.Schema({
  name: String,
  ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }]
});
module.exports = mongoose.model('Dish', DishSchema);
