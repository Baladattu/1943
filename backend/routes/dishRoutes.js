import express from 'express';
import dish from '../models/dish.js';

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const data = await dish.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching dish' });
    }
});

router.post('/', async (req, res) => {
    try {
        const add = await dish.create(req.body);
        res.json(add);
    } catch (error) {
        res.status(500).json({ error: 'Error creating dish' });
    }
});
export default router;