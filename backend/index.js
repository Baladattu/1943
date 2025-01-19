const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dishRoutes = require('./routes/dishRoutes');
const ingredientRoutes = require('./routes/ingredientRoutes');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors({'origin': '*'}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/dishes', dishRoutes);
app.use('/api/ingredients', ingredientRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));