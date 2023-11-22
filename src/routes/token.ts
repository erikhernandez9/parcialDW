import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/', (req, res) => {
    const token = jwt.sign({ userId: 1 }, 'secretKey', { expiresIn: '1h' });
    res.json({ token });
});

export default router;