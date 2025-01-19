const mongoose = require('mongoose');
const IngredientSchema = new mongoose.Schema({
    name: {type:String, unique:true},
    calories: Number,
    quantity: Number
});
module.exports = mongoose.model('Ingredient', IngredientSchema);