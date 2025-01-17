import mongoose from 'mongoose';
const DishSchema = new mongoose.Schema({
    name: String,
    ingredients: String,
});

const dish = mongoose.model('Dish', DishSchema);
export default dish;
