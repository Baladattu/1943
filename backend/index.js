import express from 'express';
import mongoose from 'mongoose';
import dishRoutes from './routes/dishRoutes.js';

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/cc");

app.use('/api/dishes', dishRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));